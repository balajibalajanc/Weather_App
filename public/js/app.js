console.log('Client side java script loaded successfully!');

const weatherform=document.querySelector('form');
const searchform=document.querySelector('input');
const message_1=document.querySelector('#msg_1');
const message_2=document.querySelector('#msg_2');
const message_3=document.querySelector('#msg_3');
const message_4=document.querySelector('#msg_4');
const message_5=document.querySelector('#msg_5');



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
            message_1.textContent='Location you searched for : '+ data.location_details;
            message_2.textContent= 'Temperature : '+data.temperature_desc;
            message_3.textContent='Current Temperature is : '+data.current_temp+' but it feels like : '+data.feelslike_temp;
            message_4.textContent='Humidty Percentage is : '+ data.humidty;
            message_5.textContent='Wind speed is : ' + data.wind_speed;

        }
    })      
})
})

