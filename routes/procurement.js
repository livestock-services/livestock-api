const express = require('express');
const router = express.Router();
const Procurement = require('../models/Procurement');
const Supplier = require ('../models/Supplier');
const verify = require('./verifyToken')



router.get('/', async (req,res)=>{
    
    res.send('Procurement Route is grafting!');

});

//GET ALL PFIs
router.get('/allPfis', async (req,res)=>{

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
    
    req.body.date = new Date()
    req.body.newRecordAddedDate = new Date()
    req.body.pfiDate = new Date()
    req.body.stageOneDate = "No date yet"
    req.body.stageTwoDate = "No date yet"
    req.body.stageThreeDate = "No date yet"
    req.body.stageFourDate = "No date yet"
    req.body.stageFiveDate = "No date yet"
    req.body.stageSixDate = "No date yet"

    const newDate =  (req.body.date).toLocaleDateString('en-GB');
    const newRecordAddedDate = (req.body.newRecordAddedDate).toLocaleDateString('en-GB');
    const newPfiDate =  (req.body.pfiDate).toLocaleDateString('en-GB');
    const newStageOneDate =  (req.body.stageOneDate);
    const newStageTwoDate =  (req.body.stageTwoDate);
    const newStageThreeDate =  (req.body.stageThreeDate);
    const newStageFourDate =  (req.body.stageFourDate);
    const newStageFiveDate =  (req.body.stageFiveDate);
    const newStageSixDate =  (req.body.stageSixDate);
     try {  
        const newPfi = new Procurement({
        
        purchaseOrderNumber: req.body.purchaseOrderNumber,
        pfiNumber: req.body.pfiNumber,
        pfiComments:req.body.pfiComments,
        pfiComplianceComments: req.body.pfiComplianceComments,
        supplierName: req.body.supplierName,
        supplierComment: req.body.supplierComment,
        date:newDate,
        newRecordAddedDate: newRecordAddedDate,
        pfiDate:newPfiDate,
        stageOneDate:newStageOneDate,
        stageTwoDate:newStageTwoDate,
        stageThreeDate:newStageThreeDate,
        stageFourDate:newStageFourDate,
        stageFiveDate:newStageFiveDate,
        stageSixDate:newStageSixDate,
        
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


//GET ALL PFIs
router.get('/allSuppliers', async (req,res)=>{

    try {
        const allSuppliers = await Supplier.find();

        
        res.json({

            status: 'Successfully retreived all Suppliers!',
            data: allSuppliers
            
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

router.post('/addNewSupplier', async (req,res) => {
    req.body.date = new Date();
    const newDate = (req.body.date).toLocaleDateString('en-GB'); 
    try {  
        const newSupplier = new Supplier({
            supplierName:req.body.supplierName,
            date:newDate
        });

        const savedSupplier = await newSupplier.save();
        console.log(savedSupplier);
            res.json({
               
                Message: 'Successfully added a new supplier !',
                data: savedSupplier
            });

    }catch (err) {
            res.json({ message: err })
       }
    
});

router.delete('/allPfis/:id', async (req,res)=>{

    try {
        const deletedPFI = await Procurement.findByIdAndDelete({ _id: req.params.id }, req.body).then(function(){
            Procurement.findOne({ _id: req.params.id }).then(function(){
                res.json({

                    status: 'Successfully deleted the PFI Record!',
                    data: deletedPFI
                    
                })
            })
        })
       
 
    } catch (error) {
        res.json({ message: error})
    }
 });


 router.delete('/allSuppliers/:id', async (req,res)=>{

    try {
        const deletedSupplier = await Supplier.findByIdAndDelete({ _id: req.params.id }, req.body).then(function(){
            Supplier.findOne({ _id: req.params.id }).then(function(){
                res.json({

                    status: 'Successfully deleted the PFI Record!',
                    data: deletedSupplier
                    
                })
            })
        })
       
 
    } catch (error) {
        res.json({ message: error})
    }
 });


module.exports= router