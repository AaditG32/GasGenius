const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1c836a1bddmsh69b8f2a9ca13833p1f5a23jsn21e2345b7c1f',
		'X-RapidAPI-Host': 'gas-price.p.rapidapi.com'
	}
};

fetch('https://gas-price.p.rapidapi.com/europeanCountries', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
