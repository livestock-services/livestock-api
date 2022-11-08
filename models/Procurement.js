const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')
const luxon = require ('luxon')


const ProcurementSchema = new mongoose.Schema({

        supplierName:{
            type: String,
            required: true
        },
        purchaseOrderNumber:{
            type:String,
            required: true
        },
        pfiNumber:{
            type: String,
            required: true
        },
       
       
        date: {         
            type:String,
          // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
          default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
          
          // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
        },

        status:{
              
                type: String,
                default:'New PFI added, awaiting acknowledgement'
          
        }
        
        
});

module.exports= mongoose.model("Procurement", ProcurementSchema);