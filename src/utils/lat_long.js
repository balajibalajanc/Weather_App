const request= require('request');

const loc=(lat,long,callback)=>
{
    const url='http://api.weatherstack.com/current?access_key=37eb5c39799c736bd50249ee2bee0e2a&query='+lat+','+long;

    request(
        {url,json: true},(error,{body}) =>
    {
    if(error)
    {
        callback('Unable to connect to internet',undefined);
    }
    else if(body.error)
    {
        callback(body.error.info,undefined);
    }
    else{
         callback(undefined,body.current.weather_descriptions[0] +" The current temperature is "+ body.current.temperature+" but it feels like "+body.current.feelslike);
            // {desci:body.current.weather_descriptions[0],
            // temperature:body.current.temperature,
            // feelslike:body.current.feelslike});
    }
        }
    )   
}

module.exports=loc