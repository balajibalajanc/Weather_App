const path = require('path')
const express= require('express');

const public_dir_path=path.join(__dirname,'../public');
const help_dir_path=path.join(__dirname,'../public/help.html');
const about_dir_path=path.join(__dirname,'../public/about.html');

const app=express()

app.use(express.static(public_dir_path))



// app.get('/',(req,res)=>{

//     res.send('<h1>Home Page</h1>');
// })

// app.get('/help',(req,res)=>{

//     res.send('<h1>Help Page</h1>');
// })

// app.get('/about',(req,res)=>{

//     res.send('<h1>About Page</h1>');
// })

app.get('/weather',(req,res)=>{

    res.send([{name:'Chengalpatu',Temperature:'Raining'},{name:'Thiruvallur',Temperature:'Chill'}]);
})

app.listen(3000,()=>{
    console.log("server is up and running");
});