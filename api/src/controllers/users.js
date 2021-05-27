const axios = require('axios')

async function getUsers(req, res, next){
    const {text} = req.query
    try {
        const {data} = await axios.get(`https://api.github.com/search/users?q=${text}`)
        return res.send(data)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getUsers,
}