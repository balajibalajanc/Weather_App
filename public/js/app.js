console.log('Client side java script loaded successfully!');

const weatherform=document.querySelector('form');
const searchform=document.querySelector('input');


weatherform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location=searchform.value

    console.log(location);

    fetch('http://localhost:3000/weather?search='+encodeURIComponent(location)).then((response)=>{
    response.json().then((data)=>{
        if(data.error)
        {
            console.log(data.error);
        }   
        else{console.log(data);}
    })
})
})

