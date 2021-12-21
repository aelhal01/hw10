//gets user input chosen country
var chosen_countryName = $('input').val();

//start searching for country info once submit button is pressed
function setup() {
  var button = select('#submit');
  button.mousePressed(getCountry(chosen_countryName));
}

//search and return selected country info
function getCountry(countryName) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://restcountries.com/v3.1/name/'+countryName, true);
  xhr.send();

  xhr.addEventListener('load', function(){
    let [data] = JSON.parse(xhr.responseText);

    //Replace country image source in HTML file
    //let countryImage = document.getElementById("country_image").src;
    //countryImage.innerHTML = ${data.flag};

    //Replace country name in HTML file
    let countryname = document.getElementById("country_name");
    countryname.innerHTML = $data.name;


    //Replace country region in HTML file
    let countryRegion = document.getElementById("country_region");
    countryRegion.innerHTML = $data.region;

    //Replace country population in HTML file
    let countryPopulation = document.getElementById("ion-ios-people");
    countryPopulation.innerHTML = $data.population;

    //Replace country language in HTML file
    let countryLanguage = document.getElementById("ion-ios-mic");
    countryLanguage.innerHTML = $data.languages[0].name;

    //Replace country currency in HTML file
    let countryCurrency = document.getElementById("ion-social-usd");
    countryCurrency.innerHTML = $data.currencies[0].name;
  });
}
