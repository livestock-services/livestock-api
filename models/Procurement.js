const moment = require('moment');
const mongoose = require('mongoose');
const tz = require ('moment-timezone')
const ProcurementSchema = new mongoose.Schema({
        purchaseOrderNumber:{
            type: Number,
            required: true
        },
        pfiNumber:{
            type: Number,
            required: true
        },
        supplierName:{
            type: String,
            required: true
        },
        supplierEmail:{
            type: String,
            required: true
        },
        date: {         
            type:String,
           // default: moment().tz("America/").format('dddd, MMMM Do YYYY, h:mm:ss a') 
            default: moment().tz("Zambia/Lusaka").format('dddd, MMMM Do YYYY, h:mm:ss a')         
        }
        
        
});

module.exports= mongoose.model("Procurement", ProcurementSchema);