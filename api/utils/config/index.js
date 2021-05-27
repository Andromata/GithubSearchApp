require('dotenv').config();

module.exports = {
    dbName: process.env.DB_NAME || 'videogames',
    dbUser: process.env.DB_USER || 'postgres',
    dbPort: process.env.DB_PORT || '5432',
    dbHost: process.env.DB_HOST || 'localhost',
    dbPassword: process.env.DB_PASSWORD || '1234',
    HOST: process.env.HOST || 'localhost',
    PORT: process.env.PORT || '3001',
    APYKEY: process.env.APY_KEY
}