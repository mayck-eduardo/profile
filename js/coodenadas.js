    function getWeatherData() {

        let city = document.getElementById('city').value;
        let state = document.getElementById('state').value;
        let country = document.getElementById('country').value;
        let limit = 1
        let apiKey = 'c1546a14357ae0b10c01b1d480a16012';
        // Define the API URL
        const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=${limit}&appid=${apiKey}`;

        // Make a GET request
        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                document.getElementById('latitude').innerText = `Latitude: ${data[0].lat}`;
                document.getElementById('longitude').innerText = `Longitude: ${data[0].lon}`;
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('latitude').innerText = 'Erro ao obter dados';
            });

    }
