// Q1. Perform case insensitive search

// router.get('/find',async function(req,res){
//   let user = await userModel.find({username:"tanish"});
//   res.send(user);
// })--> In the database if username is tanish --> and we also write tanish then only it will show the data on the browser,, but if we use caps in between then it will not shown the data on the web page 

// to resolve this we use  RegExp   -->

// router.get('/find',async function(req,res){
//   var regEx = new RegExp("tanish",'i');
//   let user = await userModel.find({username:regEx});
//   res.send(user);
// })

// Now we will get all the users in which tanish is there like if someon whose name is tanisha , then tanisha will also be printed on the browser
// To solve this problem we use 
// ^  -> shuruat kaise ho
// %  -> ant kaisa ho

router.get('/find',async function(req,res){
    var regEx = new RegExp("^tanish$",'i');
    let user = await userModel.find({username:regEx});
    res.send(user);
  })

  