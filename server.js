import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import 'dotenv/config';

import Cards from './dbCards.js';

// App Config
const app = express();
const port = process.env.PORT || 8001; // specify the port
const connection_url = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.hseb8sz.mongodb.net/tinderdb?retryWrites=true&w=majority`//put in database name after .net/

// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_url);

// API endpoints
app.get('/', (req, res) => res.status(200).send("HELLOOOOO"));

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));