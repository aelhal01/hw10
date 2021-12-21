let countriesContainer = document.querySelector('.countries');

var chosen_countryName = $('input').val();

function setup() {
  var button = select('#submit');
  button.mousePressed(getCountry(chosen_countryName));
}

function getCountry(countryName) {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://restcountries.com/v3.1/name/'+countryName, true);
  xhr.send();

  xhr.addEventListener('load', function(){
    let [data] = JSON.parse(xhr.responseText);

    let html = '
      <article class="country">
        <img class="country_image" src="${data.flag}" />
        <div class="country_data">
          <h3 class="country_name">${data.name}</h3>
          <h4 class="country_region">${data.region}</h4>
          <p class="country_row"><span class="ion-ios-people"</span>${data.population}</p>
            <p class="country_row"><span class="ion-ios-mic"</span>${data.languages[0].name}</p>
          <p class="country_row"><span class="ion-social-usd"</span>${data.currencies[0].name}</p>
        </div>
      </artcile>
    ';

    countriesContainer.insertAdjacentHTML('beforeend', html);
  });
}
