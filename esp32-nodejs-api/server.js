import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

/* firebase service */
import { FirebaseService } from './src/firebase.service.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.listen(process.env.PORT, () => {
    console.log('Listening on port ', process.env.PORT);
});

const firebaseService = new FirebaseService();

app.get('/', (req, res) => {
    firebaseService.getMorse().then((x) => {
        console.log('morse:', JSON.stringify(x));
        if (x!=null && x.data!=null && x.data.value!=null) {
            res.send(x.data.value);
        } else {
            res.send("");
        }
    });
});