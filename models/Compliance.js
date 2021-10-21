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
        }

      
       
        
        
});

module.exports= mongoose.model("Amended Permit Applications", AmendedPermitApplicationsSchema);

