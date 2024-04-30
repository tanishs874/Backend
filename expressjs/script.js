// express use 
 
const express = require('express')
const app = express();

app.set("view engine","ejs");//configure ejs 

// app.use(function(req,res,next){
//     console.log('middleware working ')///MIDDLEWARE
//     next();
// })

app.get('/',function(req,res){
    res.render("index")

})

app.get('/contact',function(req,res){
    res.render("contact")
})
// app.get('/profile',function(req,res){
//     res.send('Hello profile!!')
// })

// app.get('/profile/:username',function(req,res){
//     res.send(`Hello from ${req.params.username}`)
// })


app.listen(3001);

// middleware ek aisa function hota hai jo har route se pehle chalta hai , iska matlab saare routes mein koi bhi chale usee pehle middleware chalta hai 
// ans usme likha code pehle execute hota hai 

// node ke sath ek dikkat hai ki agar control ek baar bhi kisi middleware par gya to control khud se agle route/middleware par nahi jayega
// use agle par le jane ke liye apko push karna padega or ye push kehlayega next() ko chalana 


// req --> req mein data hota hai aane wale user ki request ki taraf ka , jaise ki uski location, device info and other things. ..
// res --> res mein controls hote hai jinke basis pe hum server se respon se bhej pate hai
// next --> next is just a push so that our request move to the next thing which should be executed..

// Routing parameters
///---> facebook.com/profile/harsh
//----> facebookcom/profile/harshit 
//----> facebook.com/profile/harshita
//----> facebook.com/profile/hardik

//--> WE will not create multiple routes here --> for handling this we use dynamic routing 

// DYNAMIC ROUTING ---> Aisa koi bhi route jiska koi hissa baar baar same rehta and kuch hissa baar baar change hota hai iske liye hum dynamic route bana sakte hai ..

///---> facebook.com/profile/harsh
//----> facebookcom/profile/harshit 
//----> facebook.com/profile/harshita
//----> facebook.com/profile/hardik

// WE can create paramters for this 

// ----> /profile/:write anything here 
// ----> /profile/:username

// important ---> url mein jab bhi apke pass ek aisa pattern ho 
// profile/:username
// this username is called as params
// for accesing the value of this username or params---> we have to use like "req.params.username"...
// app.get('/profile/:username',function(req,res){
//     res.send(`Hello from ${req.params.username}`)
// })
// --------> to make any route dynamic you can use : at the place where you want to make it dynamic 

// Template engines --> ye ek style of markup se convert karke apko html dete hai 
//-----> Html ke pass superpowers nahi hai calculation karne ke liye ..
// So, we use template engine "ejs" --> ejs is html with superpowers

//----> ejs set up karne ke liye steps

// 1) ejs install => npm i install
// 2) configure ejs => app.set("view engine","ejs")
// 3) ek views name se folder banao
// 4) usme ejs files banao
// 5) send ki jagha render karo--> render karte waqt make sure aap views folder ke andar wali hi koi file ka name likhe 
// --> or render function me .ejs mention na kare

// template engines ==> ejs,pug,handlebars,jade
// we use ejs because it is very very similar to html

// template engine ==> ek markup style jo ki baad me convert ho jaegi html mein 

// if we want to change something on the webpage like i want to change age to 10 where ever written on the webpage 
// so for this read the code written below

// app.get('/',function(req,res){
//     res.render("index",{age:10})--> write like this here and then 
// })

// <h3><%= age %></h3>//Write this on the page of ejs
// -----> This will change age to 10 wherever written on the page ..
