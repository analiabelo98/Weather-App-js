
//location function
window.addEventListener('load', ()=> {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureMainDescription = document.querySelector('.temperature-mainDescription');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let feelsLikeDegree = document.querySelector('.feelsLike-degree');
    let locationIcon = document.querySelector('.weatherIcon');

    if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position =>{
                console.log(position);

                long = position.coords.longitude;
                lat = position.coords.latitude;
                
                //DEMO (requires requesting temporary permission).
                //This API enables cross-origin requests to anywhere.
                //If the protocol is omitted, it defaults to http (https if port 443 is specified).
                const proxy = 'http://cors-anywhere.herokuapp.com/';
                //API call
                const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=4b5bb6ce51cd3d772f2ed94399fc5a88`;
                
            //get info.
            fetch(api)
            //convert to JASON.
               .then(response => {
                   return response.json();
                })
                .then(data => {
                    console.log(data);
                    //shorthand (for data.main.temp)
                    const{temp,feels_like} = data.main; 
                    const{main, description,icon} = data.weather[0];
                    const local = data.name;
                    
                
                    
                    
                    //Set DOM Elements from the API.
                    temperatureDegree.textContent = temp;
                    feelsLikeDegree.textContent = feels_like;
                    temperatureMainDescription.textContent = main;
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = local;
                    locationIcon.innerHTML = `<img src="icons/${icon}.png"/>`
                    
                });
        });
    }else {
        h1.textContent = "Hey this in not working!";
    }
         
    //SKYCONS
    /*function setIcons(icon,iconID){

    }*/
});

