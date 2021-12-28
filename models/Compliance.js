const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')

const AmendedPermitApplications = new mongoose.Schema({

        pfiNumber:{
                type: Number,
                required: true
            },

        reasonForAmendment:{
            type: String,
            required: true
        },

        date:{
            type: String,
            default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
        }

      
       
        
        
});




const PermitApplications = new mongoose.Schema({

    supplierName:{
        type: String,
        required: true
    },

    
    pfiNumber:{
        type: String,
        required: true
    },
    selectCurrency:{
        type: String,
        required: true
    },

    pfiValue:{
        type: Number,
        required: true
    },

    
    exchangeRate:{
        type: Number,
        required: true
    },

    localCurrency:{
        type: String,
       


    },

    marketAuthFee:{
        type: Number,
        
    },

    marketNonAuthFee:{
        type: Number,
       
    },

    feeType:{
        type: String,
        required:true
    },

    authBody:{
        type: String,
        required: true
    },

    date:{
        type: String,
        default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
    }, 


    permitPaper:{
        type: Number,
        required: true
    },

    

    permitStatus:{
       
            type: String,
            default: "Pending"
        

    }


})





const AmendedPermitApplicationsSchema = mongoose.model("Amended Permit Applications", AmendedPermitApplications);
const PermitApplicationsSchema = mongoose.model("Permit Applications", PermitApplications)

module.exports = { APAs: AmendedPermitApplicationsSchema, PAs: PermitApplicationsSchema }