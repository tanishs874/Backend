// Q1. Perform case insensitive search

// router.get('/find',async function(req,res){
//   let user = await userModel.find({username:"tanish"});
//   res.send(user);
// })--> In the database if  username is tanish --> and we also write tanish then only it will show the data on the browser,, but if we use caps in between then it will not shown the data on the web page 

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

//   Q2. Find documents where an array field contains all of a set of value


router.get("/find",async function(req,res){
    let user = await userModel.find({categories:{$all:['dance']}});
    res.send(user);
  })
  // let user = await userModel.find({categories:{$all:['dance']}}); --> This will find all the users whose categories includes dance ..


//   Q3. Search for documents with a specific date range

router.get("/find", async function(req,res){
    var date1 = new Date('2024-05-03');
    var date2 = new Date('2024-05-05');
    let user = await userModel.find({datecreated:{ $gte:date1,$lte:date2 }});
    res.send(user);
  })
  // It will find the data of the given date range..

//   Q4. Filter documents based on the existence of a field

router.get("/find",async function(req,res){
  let user = await userModel.find({categories:{$exists:true}});
  res.send(user);
})
