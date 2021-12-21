$('.submit').click( function searchUni (event){
	event.preventDefault();
	$('.name').empty();
	$('.web-pages').empty();

	var uni = $('input').val();

		$.ajax({

			type: 'GET',
			url: 'http://universities.hipolabs.com/search?country=United+States' + uni,

			success: function (response) {
				console.log(response);

				$('.country').append('<span>' + response.country + '</span>');
				// $('.description').text(response.name);

        response.name.forEach(function (names) {
					var uniName = names.name.country
					$('.name').append('<span>' + uniName + '  </span>');
					}

          response.name.forEach(function (web_page) {
  					var uniWeb = web_page.web-pages.country
  					$('.web-pages').append('<span>' + uniWeb + '  </span>');		
  					}
			)},
			error: error()

		}) //ajax request 1	end

}) // end submit searchUni

function error () {
	console.log('Oops! This is an error');
}
