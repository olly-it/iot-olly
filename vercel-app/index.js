import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const app = express();

app.listen(process.env.PORT, () => {
  console.log("Server running at PORT: "+process.env.PORT);
});

app.get('/', (req, res) => {
    res.status(200).send("here you are :-)");
})

// Export the Express API
// module.exports = app