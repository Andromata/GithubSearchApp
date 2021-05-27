const axios = require('axios')

async function getRepositories(req, res, next){
    const {text} = req.query
    try {
        const {data} = await axios.get(`https://api.github.com/search/repositories?q=${text}`)
        return res.send(data)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getRepositories,
}