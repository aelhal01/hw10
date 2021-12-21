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
  });
}
