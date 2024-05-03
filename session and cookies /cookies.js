// Cookies --> To use cookies we need to install cookieParser
// express generator already installed it for us 
// //Cookie setup 
// ---> res.cookie("name",value);
// cookie readin
//--> req.cookies.name
// cookie delete
//--> res.clearCookie("name")
/// Cookie

// router.get("/",function(req,res){
//     res.cookie("age",25);
//     res.render("index");
//   })
  
//   router.get("/read",function(req,res){
//     console.log(req.cookies.age);
//     res.send("check");
//   })
  
//   // How to delete the cookie 
//   router.get("/delete",function(req,res){
//     res.clearCookie("age");
//     res.send("clear ho gyi");
//   })