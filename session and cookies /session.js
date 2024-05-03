// session ---> Server par data save hota hai 
// install session 
// ===> npm i express-session
//---> Now in main file app.js
// var session = require("express-session")

// app.use(session({
//     resave:false,
//     saveUninitialized:false,
//     secret:"holabholaholabhola"
// }))


// ---> indexe.js file 

// router.get("/",function(req,res){
//     req.session.ban = true;
//     res.render("index");
//   })
  
//   router.get("/checkban",function(req,res){
//     if(req.session.ban===true){
//       res.send("YOU ARE BANNED !!!");
//     }
//   });
  
//   // How to remove the ban
//   router.get("/removeban",function(req,res){
//     req.session.destroy(function(err){
//       if(err) throw err;
//       res.send("BAN REMOVED");
//     })
//   })

// How to create a session
//---> req.session.koibhinaam = koibhivalue;
// How to read 
// --> req.session.koibhinaam
//--> How to delete
//---> req.session.destroy