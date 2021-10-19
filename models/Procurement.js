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
            type: moment(),
            required: true
            
        }
        
        
});

module.exports= mongoose.model("Procurement", ProcurementSchema);