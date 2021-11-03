const mongoose = require('mongoose');
const moment = require('moment');

const tz = require ('moment-timezone');




const Admin = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        max: 255,
        min: 2
    },
    email:{
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password:{
        type: String,
        required: true,
        max:1024,
        min:8 
    },

    date: {         
        type:String,
      // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
      default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
      
      // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
    },

    role:{
       
            type: String,
            default: 'is-admin'
        
        
    }

});


const Procurement = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        max: 255,
        min: 2
    },
    email:{
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password:{
        type: String,
        required: true,
        max:1024,
        min:8 
    },

    date: {         
        type:String,
      // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
      default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
      
      // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
    },

    role:{
       
        
            type: String,
            default: 'is-procurement'
        
        
    }

});


const Compliance = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        max: 255,
        min: 2
    },
    email:{
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password:{
        type: String,
        required: true,
        max:1024,
        min:8 
    },

    date: {         
        type:String,
      // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
      default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
      
      // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
    },

    role:{
        
       
            type: String,
            default: 'is-compliance'
        
        
    }

});


const Finance = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        max: 255,
        min: 2
    },
    email:{
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password:{
        type: String,
        required: true,
        max:1024,
        min:8 
    },

    date: {         
        type:String,
      // default: moment().utc().format('dddd, MMMM Do YYYY, h:mm:ss a zz') 
      default: moment().tz("Africa/Lusaka").format('dddd, MMMM Do YYYY') 
      
      // default: moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a zz')         
    },

    role:{
       
            type: String,
            default: 'is-finance'
    
    }

});



const AdminSchema = mongoose.model("Administrators", Admin);
const ProcurementSchema = mongoose.model("Procurement Dept Users", Procurement)
const ComplianceSchema = mongoose.model("Compliance Dept Users", Compliance);
const FinanceSchema = mongoose.model("Finance Dept Users", Finance)


module.exports = { AUs: AdminSchema, PUs: ProcurementSchema, CUs:ComplianceSchema, FUs:FinanceSchema  }