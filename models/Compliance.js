const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')

const AmendedPermitApplicationsSchema = new mongoose.Schema({

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

module.exports= mongoose.model("Amended Permit Applications", AmendedPermitApplicationsSchema);

