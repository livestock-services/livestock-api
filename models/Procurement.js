const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')
const luxon = require ('luxon')


const ProcurementSchema = new mongoose.Schema({

        supplierName:{
            type: String,
            required: true
        },

        supplierComment:{
          type:String
        },
        
        purchaseOrderNumber:{
            type:String,
            
        },
        pfiNumber:{
            type: String,
           
        },
        pfiComments:{
          type: String,
         
      },

      pfiComplianceComments:{
        type: String,
       
    },


        date: {         
            type:String,
          // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
          default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
          
          // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
        },

        newRecordAddedDate: {         
          type:String,
        // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
        default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
        
        // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
      },
       
        pfiDate: {         
            type:String,
          // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
          default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
          
          // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
        },
       stageOneDate: {         
            type:String,
          // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
          default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
          
          // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
        },

        stageTwoDate: {         
            type:String,
          // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
          default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
          
          // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
        },

        stageThreeDate: {         
            type:String,
          // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
          default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
          
          // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
        },

        stageFourDate: {         
            type:String,
          // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
          default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
          
          // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
        },

        stageFiveDate: {         
            type:String,
          // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
          default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
          
          // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
        },

        stageSixDate: {         
          type:String,
        // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
        default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
        
        // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
      },

        status:{
              
                type: String,
                default:'New record added'
          
        }
        
        
});

module.exports= mongoose.model("Procurement", ProcurementSchema);