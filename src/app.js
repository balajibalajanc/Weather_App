const path = require('path')
const express= require('express');
const hbs = require('hbs');
const { request } = require('http');
const geo_code = require('./utils/geo_code');
const loc= require('./utils/lat_long');
const { prototype } = require('stream');

const public_dir_path=path.join(__dirname,'../public');
const view_dir_path=path.join(__dirname,'../Templates/views');
const partials_path=path.join(__dirname,'../Templates/partials');
const port=process.env.PORT || 3000
// const help_dir_path=path.join(__dirname,'../public/help');
// const about_dir_path=path.join(__dirname,'../public/about.html');

const app=express()

app.set('view engine','hbs');
app.set('views',view_dir_path);
hbs.registerPartials(partials_path);

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

app.get('/weather',(req,res)=>{
     
    if(!req.query.search){
        return res.send({ error:'Am i joke to you pleas give Address to search'});
    }

    geo_code(req.query.search,(error,{latitude,longitude,location_name}={})=>
{
  if (error)
  {
    return  res.send({error}); //console.log('Error ' + error);
  } 

loc(latitude,longitude,(error,{temperature_desc,current_temp,feelslike_temp,wind_speed,humidity	}={} )=>
{   
    if (error)
        {  return  res.send({error}); }   

       res.send({searchterm:req.query.search,location_details:location_name,temperature_desc:temperature_desc,current_temp:current_temp,
    feelslike_temp:feelslike_temp,wind_speed:wind_speed,humidity:humidity});
})

})

})  

app.get('/products',(req,res)=>{
    
    if(!req.query.search){
         return res.send({ error:'Am i joke to you pleas give somthing to search'});
     }

    res.send({products:[]})

})

app.get('/help/*',(req,res)=>
{
    res.render('404',{error_message:'Sorry human... help page vanished from my brain'});
})


app.get('*',(req,res)=>{
    res.render('404',{error_message:'No such page'});
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



app.listen(port,()=>{   
    console.log("server is up and running in the port: "+port);
});