const express = require('express');
const router = express.Router();
const Procurement = require('../models/Procurement');
const verify = require('./verifyToken')
// const cors = require('cors');


router.get('/', async (req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    res.send('Procurement Route is grafting!');

});

//GET ALL PFIs
router.get('/allPfis', async (req,res)=>{

    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 

    try {
        const allPfis = await Procurement.find();
        res.json({

            status: 'Successfully retreived PFIs!',
            data: allPfis
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });


 //CREATE NEW PFIs
router.post('/addNewPfi', async (req,res) => {
    
     try {  
        const newPfi = new Procurement({
        
        purchaseOrderNumber: req.body.purchaseOrderNumber,
        pfiNumber: req.body.pfiNumber,
        supplierName: req.body.supplierName,
        supplierEmail: req.body.supplierEmail,
        issuedDate: req.body.date,
        status: req.body.status
                
        });

           
     
        console.log(newPfi);
       
       const savedPfi = await newPfi.save();
         console.log(savedPfi);
             res.json({
                
                 Message: 'Successfully added a new PFI !',
                 data: savedPfi
             });
         } catch (err) {
              res.json({ message: err })
         }
});

module.exports= router