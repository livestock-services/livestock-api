
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const Procurement = require('./models/Procurement');
const Compliance = require('./models/Compliance');
const Finance = require('./models/Finance');

const authRoute = require('./routes/auth');
const procurementRoute = require('./routes/procurement');
const complianceRoute = require('./routes/compliance');
const financeRoute = require('./routes/finance');

//middleware
app.use(express.json());
app.use(cors());
app.use('/auth', authRoute);
app.use('/pfis', procurementRoute);
app.use('/compliance', complianceRoute);
app.use('/finance', financeRoute);



// Default Route
app.get('/', (req,res) =>{
    res.send('Server is Working!')
});


//Mongo URI
// const mongoURI = `${process.env.MONGODB_URI}`;

// const mongoURI = 'mongodb://localhost:27017/FileUploads_DB';

//Mongo Connection

const conn = mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser:true, useUnifiedTopology:true });

// conn.once('open', ()=> console.log('MongoDB is connected!'));
// conn.on('error', (e)=> console.log(e));



const port = process.env.PORT || 80 ;
if (port == null || port == "") {
    port= 5008;
}

app.listen(port, () =>
    console.log(`Server listening on port ${port}`));