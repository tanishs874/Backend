// MONGODB--->

// Mongodb is a database --> where we can store  the data of  web application,android application or any application is called database...
// Whatever the data is saved it is stored in database..

// --> Database has 2 main parts---->
// 1) Relational ---> MySQL,sql
// 2) non-relational ----> mongodb

// --> Database ---> mongodb ---> jo bhi apps ap banaoge unka data jaha store hota hai use kehte hai database..


// CODE SIDE                             MONGODB SIDE
// 1) DB Setup                           1) DB Formation
// 2) Model                              2) Collection
// 3) Schema                             3) Documents

// Har new app ka data store hoga storage me , par use directly rakhne ki jagha ek container me rakhenge , us container me sir us app ka data ayega....

// Suppose we have amazon database and in that database we have different types of db like user's db , admin's db, product db, in khando ke likhe hue code ko hum (models) bolte hai ... or inke jo khand bante hai inko kehhte hai (collection).....

// hum code likhenge model ka , or jab vo khand Banega us khand ko hum log collection kehte hai ...

//models(code) => collection(db)

// schema(code) => document(db)  
// ek app ka poora data => db
// ek app mein variety of data hota hai par poorea data ota app ka hi hai , par us data ka sub cateogray kehlata  hai collection
// collection matlab ki bola users ka data, ek user ke data ki baat kari to hua (document)..


// 1) install mongodb
// 2) install mongoosejs--> npm i mongoose
// 3) require and setup collection
// How to require -->
// const mongoose = require("mongoose");
// // How to setup --->
// mongoose.connect("mongodb://127.0.0.1:27017/PracticeKaro"); //---> is likhi hui line ki vajah se database me creation ho jaega and PracticeKaro name se database ban jaega

// // 4) Schema ---> schema matlab banne wala har document me kya kya hoga 

// const userschema = mongoose.Schema({
//    username:String,
//    name:String,
//    age:Number
// })

// 5) Create model 
//  mongoose.model(naam,schema) ---> This will make collection -> and the name of the collection will be naam or whatever we will write 

// export 

// module.exports = mongoose.model("user",userschema);----> here we export 