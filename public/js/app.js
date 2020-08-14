console.log('Client side java script loaded successfully!');

const weatherform=document.querySelector('form');
const searchform=document.querySelector('input');
const message_1=document.querySelector('#msg_1');
const message_2=document.querySelector('#msg_2');

message_1.textContent="Output";

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location=searchform.value

    fetch('/weather?search='+encodeURIComponent(location)).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
           message_2.textContent= data.error;
        }   
        else{
            message_2.textContent='Location you searched for :'+ data.location_details+' Temperature :'+data.Forecast;

        }
    })      
})
})

