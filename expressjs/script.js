// express use 
 
const express = require('express')
const app = express();

app.use(function(req,res,next){
    console.log('middleware working ')
    next();
})

app.get('/',function(req,res){
    res.send('Hello world!!')

})

app.get('/profile',function(req,res){
    res.send('Hello profile!!')
})


app.listen(3001);

// middleware ek aisa function hota hai jo har route se pehle chalta hai , iska matlab saare routes mein koi bhi chale usee pehle middleware chalta hai 
// ans usme likha code pehle execute hota hai 

// node ke sath ek dikkat hai ki agar control ek baar bhi kisi middleware par gya to control khud se agle route/middleware par nahi jayega
// use agle par le jane ke liye apko push karna padega or ye push kehlayega next() ko chalana 


// req --> req mein data hota hai aane wale user ki request ki taraf ka , jaise ki uski location, device info and other things. ..
// res --> res mein controls hote hai jinke basis pe hum server se respon se bhej pate hai
// next --> next is just a push so that our request move to the next thing which should be executed..

