const moment = require('moment');
const mongoose = require('mongoose');

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
           ISO:{
               type:Date,
               default: Date.now()
           },
           String:{
            type:String,
            default: moment().format('dddd, MMMM Do YYYY, h:mm:ss a')
        }
            
        }
        
        
});

module.exports= mongoose.model("Procurement", ProcurementSchema);