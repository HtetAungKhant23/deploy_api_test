const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoute = require('./routes/userRoute');
require('dotenv').config();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Header', 'Content-Type, Authorization');
    next();
});

app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'success',
        data: 'home page'
    });
});

app.use('/', userRoute);

app.use((error, req, res, next) => {
    res.status(500).json({
        message: error.message
    });
});

const dbConnect = async () => {
    try {
        const connect = await mongoose.connect(
            process.env.MONGODB_URL,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        if (connect) {
            console.log('connected DB');
            app.listen(process.env.PORT);
            console.log('server is running');
        }
    } catch (err) {
        console.log(err);
    }
}

dbConnect();