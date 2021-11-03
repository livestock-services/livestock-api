const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { AUs, CUs, FUs, PUs } = require('../models/User');

router.get('/', async (req,res)=>{
  
       res.send('Authentication Route is grafting');

});

//GET ALL USERS
router.get('/allUsers', async (req,res)=>{
    try {
        const users = await User.find();
        res.json({
            message: users, 
            status: 'Successfully retreived users!'
        });
 
    } catch (error) {
        res.json({ message: error})
    }
 });

  //LOGIN Admin USERS
    router.post('/login/admin',async (req,res)=>{

        
      const {error}= loginValidation(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      //CHECK IF EMAIL ALREADY EXISTS
       const user = await AUs.findOne({ email: req.body.email });
       if(!user) return res.status(400).send('Email is not found');
      
    //    //CHECK FOR NAME      
    //     const username = await User.findOne({name: req.body.name });
    //    if(!username) return res.status(400).send('Name is not found');

      //CHECK IF USER PASSWORD MATCHES EMAIL
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Password is invalid');
        

    //CREATE AND ASSIGN A TOKEN
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token',token).send({ message: 'Logged In as Admin!', name:user.name, id: user._id, role: user.role, token: token});

      res.send('Logged In as Admin!');
    
     
        
     
    });


      //LOGIN Procurement USERS
      router.post('/login/proc',async (req,res)=>{

        
        const {error}= loginValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);
  
        //CHECK IF EMAIL ALREADY EXISTS
         const user = await PUs.findOne({ email: req.body.email });
         if(!user) return res.status(400).send('Email is not found');
        
      //    //CHECK FOR NAME      
      //     const username = await User.findOne({name: req.body.name });
      //    if(!username) return res.status(400).send('Name is not found');
  
        //CHECK IF USER PASSWORD MATCHES EMAIL
      const validPass = await bcrypt.compare(req.body.password, user.password);
      if(!validPass) return res.status(400).send('Password is invalid');
          
  
      //CREATE AND ASSIGN A TOKEN
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
      res.header('auth-token',token).send({ message: 'Logged In as Procurement!', name:user.name, id: user._id, role: user.role, token: token});
  
        res.send('Logged In Procurement!');
      
       
          
       
      });


        //LOGIN Compliance USERS
    router.post('/login/comp',async (req,res)=>{

        
      const {error}= loginValidation(req.body);
      if (error) return res.status(400).send(error.details[0].message);

      //CHECK IF EMAIL ALREADY EXISTS
       const user = await CUs.findOne({ email: req.body.email });
       if(!user) return res.status(400).send('Email is not found');
      
    //    //CHECK FOR NAME      
    //     const username = await User.findOne({name: req.body.name });
    //    if(!username) return res.status(400).send('Name is not found');

      //CHECK IF USER PASSWORD MATCHES EMAIL
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Password is invalid');
        

    //CREATE AND ASSIGN A TOKEN
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token',token).send({ message: 'Logged In as Compliance!', name:user.name, id: user._id, role:user.role, token: token});

      res.send('Logged In Compliance!');
    
     
        
     
    });


      //LOGIN Finance USERS
      router.post('/login/fin',async (req,res)=>{

        
        const {error}= loginValidation(req.body);
        if (error) return res.status(400).send(error.details[0].message);
  
        //CHECK IF EMAIL ALREADY EXISTS
         const user = await FUs.findOne({ email: req.body.email });
         if(!user) return res.status(400).send('Email is not found');
        
      //    //CHECK FOR NAME      
      //     const username = await User.findOne({name: req.body.name });
      //    if(!username) return res.status(400).send('Name is not found');
  
        //CHECK IF USER PASSWORD MATCHES EMAIL
      const validPass = await bcrypt.compare(req.body.password, user.password);
      if(!validPass) return res.status(400).send('Password is invalid');
          
  
      //CREATE AND ASSIGN A TOKEN
      const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
      res.header('auth-token',token).send({ message: 'Logged In as Finance!', name:user.name, id: user._id, role:user.role, token: token});
  
        res.send('Logged In as Finance!');
      
       
          
       
      });

    //LOGOUT USER
    router.get('/logout', async (req,res) => {
        res.header('auth-token', '', { maxAge: 1 });
        res.redirect('/auth/login').send('Logged Out!');
    });

    //REGISTER USER
    router.post('/register',async (req,res)=>{
        const {error}= registerValidation(req.body);
       if (error) return res.status(400).send(error.details[0].message);

    //CHECK IF EMAIL ALREADY EXISTS
       const emailExist = await User.findOne({ email: req.body.email});
    //HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

       if (emailExist) {
           return res.status(400).send('Email already exists!')
       } else {
           
         //CREATE NEW USERS
          try {  
         const registeredUser= new User({
             name: req.body.name,
             email: req.body.email,
             password: hashPassword,
             role: req.body.role.admin
         });
      
         console.log(registeredUser);
         
        const savedUser = await registeredUser.save();
          
              res.json({
                 
                  status: 'Successfully Registered User!',
                  message: savedUser
              });
          } catch (err) {
               res.json({ message: err })
          }
        }
      });



      //REGISTER ADMINS
    router.post('/admin/register',async (req,res)=>{
      const {error}= registerValidation(req.body);
     if (error) return res.status(400).send(error.details[0].message);

  //CHECK IF EMAIL ALREADY EXISTS
     const emailExist = await AUs.findOne({ email: req.body.email});
  //HASH PASSWORD
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

     if (emailExist) {
         return res.status(400).send('Email already exists!')
     } else {
         
       //CREATE NEW ADMINS
        try {  
       const registeredAdmin= new AUs({
           name: req.body.name,
           email: req.body.email,
           password: hashPassword,
           role: req.body.role
       });
    
       console.log(registeredAdmin);
       
      const savedAdmin = await registeredAdmin.save();
        
            res.json({
               
                status: 'Successfully Registered New Admin User!',
                message: savedAdmin
            });
        } catch (err) {
             res.json({ message: err })
        }
      }
    });






      //-------------------------REGISTER PROCUREMENT USERS
      router.post('/procurement/register',async (req,res)=>{
        const {error}= registerValidation(req.body);
       if (error) return res.status(400).send(error.details[0].message);
  
    //CHECK IF EMAIL ALREADY EXISTS
       const emailExist = await PUs.findOne({ email: req.body.email});
    //HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
  
       if (emailExist) {
           return res.status(400).send('Email already exists!')
       } else {
           
         //CREATE PROCUREMENT USERS
          try {  
         const registeredProc= new PUs({
             name: req.body.name,
             email: req.body.email,
             password: hashPassword,
             role: req.body.role
         });
      
         console.log(registeredProc);
         
        const savedProc = await registeredProc.save();
          
              res.json({
                 
                  status: 'Successfully Registered New Procurment User!',
                  message: savedProc
              });
          } catch (err) {
               res.json({ message: err })
          }
        }
      });


      //-------------------------REGISTER COMPLIANCE USERS
      router.post('/compliance/register',async (req,res)=>{
        const {error}= registerValidation(req.body);
       if (error) return res.status(400).send(error.details[0].message);
  
    //CHECK IF EMAIL ALREADY EXISTS
       const emailExist = await CUs.findOne({ email: req.body.email});
    //HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
  
       if (emailExist) {
           return res.status(400).send('Email already exists!')
       } else {
           
         //CREATE COMPLIANCE USERS
          try {  
         const registeredComp= new CUs({
             name: req.body.name,
             email: req.body.email,
             password: hashPassword,
             role: req.body.role
         });
      
         console.log(registeredComp);
         
        const savedComp = await registeredComp.save();
          
              res.json({
                 
                  status: 'Successfully Registered New Compliance User!',
                  message: savedComp
              });
          } catch (err) {
               res.json({ message: err })
          }
        }
      });


      //-------------------------REGISTER FINANCE USERS
      router.post('/finance/register',async (req,res)=>{
        const {error}= registerValidation(req.body);
       if (error) return res.status(400).send(error.details[0].message);
  
    //CHECK IF EMAIL ALREADY EXISTS
       const emailExist = await FUs.findOne({ email: req.body.email});
    //HASH PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
  
       if (emailExist) {
           return res.status(400).send('Email already exists!')
       } else {
           
         //CREATE FINANCE USERS
          try {  
         const registeredFin= new FUs({
             name: req.body.name,
             email: req.body.email,
             password: hashPassword,
             role: req.body.role
         });
      
         console.log(registeredFin);
         
        const savedFin = await registeredFin.save();
          
              res.json({
                 
                  status: 'Successfully Registered New Finance User!',
                  message: savedFin
              });
          } catch (err) {
               res.json({ message: err })
          }
        }
      });
  
  
  


    

module.exports= router