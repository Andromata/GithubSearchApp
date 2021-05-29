require("dotenv").config();
const REDIS_PORT= process.env.REDIS_PORT
const redis = require('redis')
const client = redis.createClient(REDIS_PORT)

module.exports = client;