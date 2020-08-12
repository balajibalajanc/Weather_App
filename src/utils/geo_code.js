const request= require('request');

const geo_code = (address,callback)=>
{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYmFsYWppYmFsYWphbmNpIiwiYSI6ImNrZGQ0eGI1eTBybHkyc25idHI3bGltamYifQ.-ab-6JEnJ3Uw9UkCMOoy_A&limit=1';
    request({url,json:true},(error,{body})=>
    {
        if(error)
{
    callback('Unable to connect to internet',undefined);
}
else if(body.features.length === 0)
{
    callback('No proper loaction',undefined);
}
else{
              
 callback(undefined,{
    latitude:body.features[0].center[1],
    longitude:body.features[0].center[0],
    location_name:body.features[0].place_name
 });
}
    }
    )
}


module.exports=geo_code