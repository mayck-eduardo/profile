    function buscaCEP() {

        let cep = document.getElementById('cep').value;

       
        // Define the API URL
        const apiUrl = `https://brasilapi.com.br/api/cep/v1/${cep}`;

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
                document.getElementById('cidade').innerText = `Cidade: ${data.city} - ${data.state}`;
                document.getElementById('bairro').innerText = `Bairro: ${data.neighborhood}`;
                document.getElementById('rua').innerText = `Rua: ${data.street}`;
                // document.getElementById('longitude').innerText = `Longitude: ${data[0].lon}`;
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('cep').innerText = 'Erro ao obter dados';
            });

    }
