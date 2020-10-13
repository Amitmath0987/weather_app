window.addEventListener('load',() => {
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            // whather API
            // api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=aae0b7927f18f5a2d300b6e21c6e5fad

            const proxy ='https://cors-anywhere.herokuapp.com/';
            fetch(`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=aae0b7927f18f5a2d300b6e21c6e5fad`)
            .then(response => {
                // console.log(response)
                return response.json();

            })
            .then(data => {
                console.log(data);
                let {temp,temp_max,temp_min} = data.main;
                let weather = data.weather[0].main;
                let wind = data.wind.speed;
                console.log(wind);
               let curlocationName = data.name;
               let country = data.sys.country;
               let location = `${curlocationName},${country}`;
               curlocation.innerHTML = location;
               
               
            // temp_min_max.innerHTML = tempMinMax;
            // convert F into C
            //  temp = (temp - 32) / 1.8;
             temp_maxC = (temp_max - 32) / 1.8;
            
            //  temp_min = (temp_min - 32) / 1.8;
             tempDegree.innerHTML = `${(temp/10).toFixed(2)}ºC`;
             temp_min_max.innerHTML = `Min ${(temp_min/10).toFixed(2)}ºC | Max ${(temp_max/10).toFixed(2)}ºC`;
             windDom.innerHTML = `wind speed:${wind}`;

             //  condition to check sunny or cloudy
             const weatherToday = document.querySelector('.weatherToday');
             weatherToday.innerHTML = `Oh Yeah today is ,${weather}`;
             if(weather == "Sunny"){
                wheathercon.innerHTML = '<i class="fas fa-sun" style="color: #eccc68;"></i>';   
            }
            else if(weather == "Cloudy" ){
                wheathercon.innerHTML = `<i class="fas fa-cloud" style="color: #f1f2f6;"></i>`;
            }
            else if(weather == "Rainy" ){
                wheathercon.innerHTML = `<i class="fas fa-rain" style="color: #44c3de;"></i>`;
            }
            else {
                wheathercon.innerHTML = `<i class="fas fa-cloud" style="color: white;"></i>`;
            }
            })

            
        
        });
        
       
    }


const curlocation = document.querySelector('.location');
const tempDegree = document.querySelector('.current-degree');
const temp_min_max = document.querySelector('.minmax-temp');
const windDom = document.querySelector('.wind');

});

const date = document.querySelector('.date');
const wheathercon = document.querySelector('.weathercon');

const getCurrentDay = () =>{

    let weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "tue";
    weekday[3] = "wed";
    weekday[4] = "thu";
    weekday[5] = "fri";
    weekday[6] = "sat";
    
    let currentTime = new Date();

   let day = weekday[currentTime.getDay()] ;
  return day;
};

const getCurrentTime = () =>{
    let months = ['january','february','march','april','may','june','july','aug','sep','oct','nov','dec'
    ];
     

    let now = new Date();
    let date = now.getDate();
    let month = now.getMonth() + 1;
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let period = "AM";
    if(hours > 11){
        period = "PM";
        if(hours > 12){
            hours -= 12;
        }
        
        if(minutes < 10){
            minutes = '0' + minutes;
        }
        
    }
    return `${months[month]} ${date} | ${hours}:${minutes}${period}`;       
    
};
getCurrentTime();
date.innerHTML = `${getCurrentDay()} | ${getCurrentTime()}`;


    // }else{
    //     alert('You denied the permission');
    // }
