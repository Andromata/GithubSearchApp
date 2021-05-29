require("dotenv").config();
const PORT = process.env.PORT
const express = require('express')
const morgan = require('morgan');
const client = require("./redis");

const app = express()

const routes = require('./src/routes/index')
const errorHandler = require('./utils/middlewares/errorHandlers')
const setHeaders = require('./utils/middlewares/setHeaders')

app.name = 'API';

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(morgan('dev'));
app.use(setHeaders);
app.use(errorHandler); 


app.use('/api', routes)


client.on('connect', function() {
    console.log('connected');
});


app.listen(PORT, () => {
    console.log(`server escuchando el puerto ${PORT}`)
})

module.exports = client 