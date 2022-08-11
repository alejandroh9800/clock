let quotes = [
  '\“Sometimes I’ll start a sentence and I don’t even know where it’s going. I just hope I find it along the way.\” — Michael Scott',
  '\“I never thought I’d say this, but I think I ate too much bone marrow.\” — Dwight Schrute',
  '\“Everything I have I owe to this job… this stupid, wonderful, boring, amazing job.\” — Jim Halpert',
  '\“And I feel God in this Chili’s tonight.\” — Pam Beesley',
  '\“I normally don’t enjoy making people laugh.\” — Angela Martin',
  '\“I’m glad Michael’s getting help. He has a lot of issues, and he’s stupid.\” — Phyllis Lapin-Vance',
  '\“No, I’m not going to tell them about the downsizing. If a patient has cancer, you don’t tell them.\” — Michael Scott',
  '\“I run a small fake ID company from my car with a laminating machine that I swiped from the Sheriff’s station.\” — Creed Bratton',
  '\“Guess what, I have flaws. What are they? Oh, I don’t know. I sing in the shower. Sometimes I spend too much time volunteering. Occasionally I’ll hit somebody with my car. So sue me.\” — Michael Scott',
  '\“The worst thing about prison was the dementors.\” — Michael Scott',
  '\“Do I need to be liked? Absolutely not. I like to be liked. I enjoy being liked. I have to be liked, but it’s not like this compulsive need to be liked, like my need to be praised.\” — Michael Scott',
  '\“I don’t care what they say about me. I just want to eat. Which I realize is a lot to ask for…at a dinner party.\” — Pam Beesley',
  '\“No, Rose, they are not breathing. And they have no arms or legs… Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?\” – Michael Scott',
  '\“I wonder what people like about me. Probably my jugs.\” — Phyllis Lapin-Vance',
  '\“Today, smoking is going to save lives.\” — Dwight Schrute',
  '\“I am running away from my responsibilities. And it feels good.\” — Michael Scott',
  '\“If I were buying my coffin, I would get one with thicker walls so you couldn’t hear the other dead people.\” — Dwight Schrute',
  '\“Dwight you ignorant sl*t.\” — Michael Scott'
]
/*
function Quotes(){
  
  let random = Math.floor(Math.random() * (quotes.length))
  
  let d = document.getElementById('quote')
  
  //d.style.transition = "filter 1s ease"

  //d.style.filter = "blur(0px)"
    
  d.innerHTML = quotes[random]
  
  /*
  setTimeout(()=>{
    
      d.style.transition = "filter 1s ease"
      d.style.filter = "blur(1px)"
    
  },7000)

  
}
Quotes()
*/
//setInterval(Quotes,8000)
/*
async function populate() {
  const requestURL = "https://www.officeapi.dev/api/quotes/random";
  //https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json
  const request = new Request(requestURL);

  const response = await fetch(request);
  const officeQuotes = await response.json();  

  populateHeader(officeQuotes);
  //populateHeroes(officeQuotes);
}

function populateHeader(obj) {
  const header = document.querySelector("header");
  const myQuote = document.getElementById('quotes');
  myQuote.textContent = obj.data.content;
  header.appendChild(myQuote);
  
  const myName = document.getElementById('name');
  
  myName.textContent = "-" + obj.data.character.firstname + " " + obj.data.character.lastname;
  header.appendChild(myName)
  
/*
  const myPara = document.createElement("p");
  myPara.textContent = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
  header.appendChild(myPara);

}

populate();
  */
/*
function populateHeroes(obj) {
  const section = document.querySelector("section");
  const heroes = obj.members;

  for (const hero of heroes) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");

    myH2.textContent = hero.name;
    myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
    myPara2.textContent = `Age: ${hero.age}`;
    myPara3.textContent = "Superpowers:";

    const superPowers = hero.powers;
    for (const power of superPowers) {
      const listItem = document.createElement("li");
      listItem.textContent = power;
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
  }
}
*/

/*


function geoFindMe() {
  if (!navigator.geolocation){
   console.log("Geolocation is not supported by your browser");
    return;
  }
  function success(position) {
    var latitude  = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    populateWeather(latitude, longitude)
    console.log(latitude, longitude)
    
  }
                
  function error() {
    console.log("Unable to retrieve your location");
  }
  navigator.geolocation.getCurrentPosition(success, error);
}

geoFindMe()



async function populateWeather(lat,lon) {  
  
  const requestURL2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=50e88b21b91f0c3ad6ee472d09408955`
  //https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json
  const request = new Request(requestURL2);

  const response = await fetch(request);
  const obj = await response.json();  

  openWeather(obj);
  //populateHeroes(officeQuotes);
  
  console.log(obj)

}

function openWeather(obj){
  
  const header = document.getElementById('head')
  const weather = document.getElementById('weather');
  weather.textContent = obj.timezone;
  header.appendChild(weather);
    
  const myName = document.getElementById('weather-txt');
  
  myName.textContent = "Temperature: " + obj.current.temp + "F \n Feels Like: " + obj.current.feels_like + "F";
  header.appendChild(myName)
  
}



async function randomUser(){
  
  const requestURL = 'https://randomuser.me/api/' // what is the url of the api
  
  const request = new Request(requestURL) // get the url that was requested
  
  const response = await fetch(request) // wait for the api page to load

  const obj = await response.json() // get json object from api
   
  appendInfo(obj) // call to append specific json objects to page
  
  //console.log(obj.results[0].picture.medium)
  
}

randomUser() // call to run the get request function


function appendInfo(obj){
  
  const header = document.getElementById('head') // get header by id
  const userImage = document.getElementById('weather') // get image tag by id
  const myName = document.getElementById('weather-txt') // get div by id
    
  userImage.src = obj.results[0].picture.large // request user image src from JSON object
  
  myName.textContent = obj.results[0].name.title + ". " + obj.results[0].name.first + " " + obj.results[0].name.last // request first and last name from json object
  
  header.appendChild(userImage) // add image to header parent
  header.appendChild(myName) // add first and last name to header parent 

}*/