function getImageNasa() {


    let apiKey = 'LIITuAbE6ybfS5YThUqZxaoE5RnY8GqyjcnilAaa';
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    // Define the API URL
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${formattedDate}&concept_tags=True`;
    console.log(apiUrl);

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
            document.getElementById('image').src = data.hdurl || data.url; // Use hdurl if available, otherwise use url
            document.getElementById('texto').alt = data.explanation;
            // document.getElementById('latitude').innerText = `Latitude: ${data[0].lat}`;
            // document.getElementById('longitude').innerText = `Longitude: ${data[0].lon}`;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('image').innerText = 'Erro ao obter dados';
        });

}
