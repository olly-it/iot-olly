import dotenv from 'dotenv';
import express from 'express';
/* firebase service */
import { FirebaseService } from './src/firebase.service.js';

dotenv.config();
const app = express();
const firebaseService = new FirebaseService();

app.listen(process.env.PORT, () => {
  console.log("Server running at PORT: "+process.env.PORT);
});

/*app.get('/', (req, res) => {
    res.status(200).send("here you are, man!");
})*/

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

// Export the Express API
// module.exports = app