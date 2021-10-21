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


 //GET ALL AMENDED PERMIT APPLICATIONS
router.get('/allAmendedPermitApplications', async (req,res)=>{
    try {
        const allAmendedPermitApplications = await Compliance.find();
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
       const newAmendedPermitApplication = new Compliance({
       
       
       pfiNumber: req.body.pfiNumber,
       reasonForAmendment:req.body.reasonForAmendment
               
       });

          
    
       console.log( newAmendedPermitApplication );
      
      const savedAmendedPermitApplication = await newAmendedPermitApplication.save();
        console.log(savedAmendedPermitApplication);
            res.json({
               
                Message: 'Successfully added a new PFI !',
                data: savedAmendedPermitApplication
            });
        } catch (err) {
             res.json({ message: err })
        }
});

 module.exports= router