const axios = require('axios')
const client = require('../../redis')

const TOKEN = process.env.TOKEN


async function getData(req, res, next){
    const {search} = req.body
    
    if(search.type === "users") {
       try {
        const { data } = await axios.get(`https://api.github.com/search/users?q=${search.text}`, {
            headers: {
              'Authorization': `token ${TOKEN}`
            },
          })
        let users = (await Promise.all( data.items.map((u) => {       
            return axios.get(u.url , {
                headers: {
                  'Authorization': `token ${TOKEN}`
                },
              })
        }))).map(({data})=>data) 
        
    const datajson = JSON.stringify(users)
        client.setex(search.type + "-" + search.text, 7200, datajson)
        return res.send(users)
       } catch (error) {
           console.log(error)
          next()
       } 
    } else {
        try {
            const { data } = await axios.get(`https://api.github.com/search/repositories?q=${search.text}`, {
                headers: {
                  'Authorization': `token ${TOKEN}`
                },
              })
            const repos = data.items
            client.setex(search.text + "repositories", 7200, JSON.stringify(repos))
            return res.send(repos)
        } catch (error) {
            next()
        }       
    }
}

function cache(req, res, next) {
    const {search} = req.body;

    client.get(search.type + "-" + search.text , (err, data) => {
        if(err) throw err;
        if(data !== null) {
          return res.send( JSON.parse(data))
        } else {
            next()
        }
    })
}

module.exports = {
    getData,
    cache
}