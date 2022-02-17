
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const authRoute = require('./routes/auth');
const procurementRoute = require('./routes/procurement');
const complianceRoute = require('./routes/compliance');
const financeRoute = require('./routes/finance');

// const corsOptions ={
//     origin:'*', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }



//----------middleware-------------------------
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
  });

// app.use(cors({
//     origin: "http://localhost:3000"
// }));

app.use(express.json());
app.use(cors());
// app.use(cors({
//     origin:['http://localhost:3000', 'https://livestock-api.herokuapp.com'],
//     methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
// }));

 
// app.use(cors(corsOptions));
app.use('/auth', authRoute);
app.use('/pfis', procurementRoute);
app.use('/comp/permits', complianceRoute);
app.use('/finance', financeRoute);

// app.use(function (req, res, next){
//     res.header("Access-Control-Allow-Origin","http://localhost:3000"); //or specify with your domain i.e http://localhost:3000
//     res.header("Access-Control-Allow-Origin","Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })

// Default Route
app.get('/', (req,res) =>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET" ); 
    
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