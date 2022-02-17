const express = require('express');
const router = express.Router();
const Finance = require('../models/Finance');
const verify = require('./verifyToken')
// const cors = require('cors');


router.get('/', async (req,res)=>{
  
    res.send('Finance Route is grafting!');

});

//GET ALL PFIs
router.get('/allFinReports', async (req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    
    try {
        const allFinReports = await Finance.find();
        res.json({

            status: 'Successfully retreived Financial Reports!',
            data: allFinReports
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

 module.exports= router