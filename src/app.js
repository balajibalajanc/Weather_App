const path = require('path')
const express= require('express');

const public_dir_path=path.join(__dirname,'../public');
const view_dir_path=path.join(__dirname,'../Templates');

// const help_dir_path=path.join(__dirname,'../public/help');
// const about_dir_path=path.join(__dirname,'../public/about.html');

const app=express()

app.set('view engine','hbs');
app.set('views',view_dir_path);


app.use(express.static(public_dir_path))

app.get('',(req,res)=>
{
    res.render('index',{
        title:'Hi successfully done Dyamic implementation'
    });
})

app.get('/help',(req,res)=>
{
res.render('help',{name :'FAQ'});
})

app.get('/about',(req,res)=>
{
res.render('about',{title :'FAQ',desc:' balaji &  co'});
})

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