
function getClima(latitude, longitude, apiKey) {
    // Define the API URL for weather data
    const climaUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=pt_br&units=metric`;

    // Make a GET request
    fetch(climaUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            document.getElementById('Cidade').innerText = document.getElementById('city').value;
            // document.getElementById('latitude').innerText = `Latitude: ${data.coord.lat}`;
            document.getElementById('temperature').innerText = `Temperatura: ${data.main.temp}°C`;
            document.getElementById('description').innerText = `Descrição: ${data.weather[0].description}`;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('latitude').innerText = 'Erro ao obter informações do clima';
        });
}


function getWeatherData() {

    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;
    let country = 'BR';
    let limit = 1
    let apiKey = 'c1546a14357ae0b10c01b1d480a16012';
    let latitude, longitude = '';
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
            if (data.length === 0) {
                document.getElementById('latitude').innerText = 'Cidade não encontrada';
                return;
            }
            latitude = `${data[0].lat}`;
            longitude = `${data[0].lon}`;
            getClima(latitude, longitude, apiKey);

        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('latitude').innerText = 'Erro ao obter dados';
        });

}


