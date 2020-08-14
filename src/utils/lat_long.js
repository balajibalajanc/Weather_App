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
         callback(undefined,{ temperature_desc :body.current.weather_descriptions[0],
             current_temp: body.current.temperature,
              feelslike_temp: body.current.feelslike,
            wind_speed: body.current.wind_speed,
        humidty:body.current.humidty});
            // {desci:body.current.weather_descriptions[0],
            // temperature:body.current.temperature,
            // feelslike:body.current.feelslike});
    }
        }
    )   
}

module.exports=loc