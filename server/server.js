import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Cards from './dbCards.js'

// App Config
const app = express();
const port = process.env.PORT || 8001;
const dbUsername = '<USER_NAME>';
const dbPassword = '<PASSWORD>';
const db = '<DB_NAME>';

const connection_url = `mongodb+srv://${dbUsername}:${dbPassword}@cluster0.3zzdd.mongodb.net/${db}?retryWrites=true&w=majority`

// Middlewares
app.use(express.json());
app.use(cors());

// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

app.post('/cards', (request, response) => {
    const dbCard = request.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            response.status(500).send(err);
        } else {
            response.status(201).send(data);
        }
    })
})

app.get('/cards', (request, response) => {
    Cards.find((err, data) => {
        if (err) {
            response.status(500).send(err);
        } else {
            response.status(200).send(data);
        }
    })
})

// Listener
app.listen(port, _ => console.log(`Listening on PORT:${port}`))