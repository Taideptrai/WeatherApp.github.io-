
const descriptionArr = 
  {"Rain":"https://icons.iconarchive.com/icons/large-icons/large-weather/512/rain-icon.png",
  "Clouds":"https://cdn0.iconfinder.com/data/icons/large-weather-icons/512/Heavy_snow.png",
  "Mist":"https://cdn0.iconfinder.com/data/icons/large-weather-icons/512/Mist.png",
  "Clear":"https://lh3.googleusercontent.com/proxy/2qGC9-kzpTTgt-6voppGIEZ6gW12JgfoBkO0Kz-zN0zeheasVpzybxHfGQOMcvPL0Yaa76LEsORErxAdAa1tUuzQP-MIX8-neun9ntgmNnvr02jjvnZ26k60VyXTGc3572VU18KqJ3LRGZIZkP5eAN0CVA"}

const appKey = "e0055af669f38820f089578e064910bc";
function onSubmit(e){
  e.preventDefault();
  const Location = document.getElementById("Location").value;
  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + Location + "&appid="+appKey;;
  fetchAPI(url);
}

function fetchAPI(url){
  console.log(url)
   var aPromise = fetch(url);
  // Work with Promise object:
  aPromise
    .then(function(response) { //response : dang truy cap vao url va get data
        console.log("OK! Server returns a response object:");
        console.log(response)
        return response.json() // tra ve json ..
     })
    .then((data)=>{ //nhan data 
         console.log(data)
         PrintValue(data)
      })
    .catch(function(error){
        console.log("Noooooo! Something error:");
        // Network Error!
        console.log(error);
    });
  
}

function PrintValue(data){
 var output = "";
     output += "<tr>"
      + "<td>"+ data.name+"</td>"
      + "<td>"+ data.timezone+"</td>"
      + "<td>"+ data.weather[0].main+"</td>"
      + "<td>"+ data.main.temp_min+"</td>"
      + "<td>"+ data.main.temp_min+"</td>"
      + "<td>"+ data.wind.speed+"</td>"
      +  "</tr>";
      
  var input = document.getElementById("List")
  
  input.innerHTML = output //add to cart
  var main = data.weather[0].main
  console.log(main)
  var img = document.getElementById("img")
  img.style.display = "block";
  img.src = descriptionArr[main]
  img.classList.add("fadeOut");
  setTimeout(function(){img.classList.remove("fadeOut")},2000)
  console.log(descriptionArr[main])
}   

 
  
