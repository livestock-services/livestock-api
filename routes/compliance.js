const express = require('express');
const router = express.Router();
const Compliance = require('../models/Compliance');
const verify = require('./verifyToken')
router.get('/', async (req,res)=>{
  
    res.send('Compliance Route is grafting!');

});

//GET ALL PFIs
router.get('/allCompReports', async (req,res)=>{
    try {
        const allCompReports = await Compliance.find();
        res.json({

            status: 'Successfully retreived Compliance Records!',
            data: allCompReports
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

 module.exports= router