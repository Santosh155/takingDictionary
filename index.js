const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_IP,
    MONGO_PORT,
} = require('./config/config');

const userAuth = require('./routes/userRoutes');
const dictionary = require('./routes/dictionaryRoutes');
const contact = require('./routes/contact');

const app = express();
app.use(express.json());
app.use(cors());
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
    mongoose
        .connect(mongoURL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        })
        .then(() => {
            console.log('DB connected');
        })
        .catch((err) => {
            console.log(err);
            setTimeout(connectWithRetry, 5000);
        });
};

connectWithRetry();

app.enable('trust proxy');

const PORT = process.env.PORT;

app.use('/api/v1', userAuth);
app.use('/api/v1/dictionary', dictionary);
app.use('/api/v1/contact', contact);

app.listen(PORT, () => {
    console.log(`Listerning on port ${PORT}`);
});
