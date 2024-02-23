const express = require('express')
const app = express();

const dotenv = require('dotenv');
dotenv.config();

app.get('/', (req, res) => {
  res.status(200).write("here you are!");
})


app.listen(process.env.PORT, () => {
  console.log("Server running at PORT: "+process.env.PORT);
});

// Export the Express API
// module.exports = app