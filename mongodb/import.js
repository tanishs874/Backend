var express = require('express');
var router = express.Router();

const userModel = require("./users");// Here we have imported from users.js file 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// router.get("/create",function(req,res){
//   userModel.create({
//     username:"tanish",
//     age:21,
//     name:"tanish sharma"
//   });
//   res.send("ban gya")
// });

// ---> The code of create written above is asynchrouns code ..
//----> and here the problem is that the code we write after this will execute first and after that this code will be executed 
//----> upar wla code jo hai vo asynchronus hai or dikkat ye ayegi ki pehle 
// ----> res.send("ban gya")---> ye chal jaega or uske baad upar wala code chalega
// ----> userModel.create({
   // username:"tanish",
    //age:21,
   // name:"tanish sharma"
  //});
// ye baad  me chalega ---> to ye dikkat hai yaha par 

// is problem se bachne ke liye hum async await ka use karenge as shown below ---->

// router.get("/create",async function(req,res){
//   const createduser = await userModel.create({
//     username:"tanish",
//     age:21,
//     name:"tanish sharma"
//   });
//   res.send(createduser)
// });
//----> ab res.send("createduser") baad me chalega pehle vahi code chalega jo likha hua hai 

// router.get("/allusers",async function(req,res){
//   let allusers = await userModel.find();
//   res.send(allusers);
// })----> this code will send the all the users in an array 

// router.get("/oneuser",async function(req,res){
//   let oneuser = await userModel.findOne({username:"tanish"});
//   res.send(oneuser);---> This will return whose username is tanish 
// })

//----> If username is not found then it will reuturn the blank page ....It will return the null value 

///====> How to delete a user 
router.get("/delete",async function(req,res){
    let deleteduser = await userModel.findOneAndDelete({
      username:"tanish"
    })
    res.send(deleteduser);
  })
  

module.exports = router;
