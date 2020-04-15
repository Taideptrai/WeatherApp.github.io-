
const descriptionArr = 
  {"Rain":"img/rain-icon",
  "Clouds":"img/heavy snow.png",
  "Mist":"img/Mist.png",
  "Clear":"img/sun.png"}

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

 
  
