require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");


const app = express();
const PORT = 5000;



app.use(cors());
app.use(express.json());



const Routes = require('./routes/index');
app.use('/', Routes);


app.listen(PORT, () => {
    console.log(`Server running on http://${PORT}`);
});
