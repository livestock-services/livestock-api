const mongoose = require("mongoose");

const SupplierSchema = new mongoose.Schema({

  supplierName: {
    type: String,
    required: true,
 
  },

  date:{
    type:String
  }
 
});

module.exports = mongoose.model("Suppliers", SupplierSchema);
