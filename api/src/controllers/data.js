const axios = require('axios')
const client = require('../../redis')

async function getData(req, res, next){
    const {search} = req.body
    
    if(search.type === "users") {
       try {
        const { data } = await axios.get(`https://api.github.com/search/users?q=${search.text}`)
        const users = await data.items
        client.setex(search.type + "-" + search.text, 7200, JSON.stringify(users))
        return res.send(data)
       } catch (error) {
          next()
       } 
    } else {
        try {
            const {data} = await axios.get(`https://api.github.com/search/repositories?q=${search.text}`)
            const repos = data.items
            client.setex(search.type + "-" + search.text, 7200, JSON.stringify(repos))
            return res.send(data)
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