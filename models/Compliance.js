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
    pfiNumber:{
        type: Number,
        required: true
    },

    
    authBody:{
        type: String,
        required: true
    },
    permitApplicationAmount:{
        type: String,
        required: true
    },

    date:{
        type: String,
        default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
    }, 

    permitStatus:{
       
            type: String,
            default: "Pending"
        

    }


})





const AmendedPermitApplicationsSchema = mongoose.model("Amended Permit Applications", AmendedPermitApplications);
const PermitApplicationsSchema = mongoose.model("Permit Applications", PermitApplications)

module.exports = { APAs: AmendedPermitApplicationsSchema, PAs: PermitApplicationsSchema }