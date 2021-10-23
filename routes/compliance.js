const express = require('express');
const router = express.Router();
const Compliance = require('../models/Compliance');
const { APAs } = require("../models/Compliance");
const { PAs } = require("../models/Compliance");
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


 //GET ALL AMENDED PERMIT APPLICATIONS
router.get('/allAmendedPermitApplications', async (req,res)=>{
    try {
        const allAmendedPermitApplications = await APAs.find();
        res.json({

            status: 'Successfully retreived all amended permit applications!',
            data: allAmendedPermitApplications
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

 //CREATE NEW AMENDED PERMIT APPLICATION
router.post('/addNewAmendedPermitApplication', async (req,res) => {
    
    try {  
       const newAmendedPermitApplication = new APAs({
       
       
       pfiNumber: req.body.pfiNumber,
       reasonForAmendment:req.body.reasonForAmendment,
       amendmentDate: req.body.date        
       });

          
    
       console.log( newAmendedPermitApplication );
      
      const savedAmendedPermitApplication = await newAmendedPermitApplication.save();
        console.log(savedAmendedPermitApplication);
            res.json({
               
                Message: 'Successfully added a new amended permit application !',
                data: savedAmendedPermitApplication
            });
        } catch (err) {
             res.json({ message: err })
        }
});






 //GET ALL PERMIT APPLICATIONS
 router.get('/allPermitApplications', async (req,res)=>{
    try {
        const allPermitApplications = await PAs.find();
        res.json({

            status: 'Successfully retreived all amended permit applications!',
            data: allPermitApplications
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

 //CREATE NEW PERMIT APPLICATION
router.post('/addNewPermitApplication', async (req,res) => {
    
    try {  
       const newPermitApplication = new PAs({
       
       
       pfiNumber: req.body.pfiNumber,
       authBody:req.body.authBody,
       permitApplicationAmount: req.body.permitApplicationAmount        
       });

          
    
       console.log( newPermitApplication );
      
      const savedPermitApplication = await newPermitApplication.save();
        console.log(savedPermitApplication);
            res.json({
               
                Message: 'Successfully added a new permit application !',
                data: savedPermitApplication
            });
        } catch (err) {
             res.json({ message: err })
        }
});


 module.exports= router