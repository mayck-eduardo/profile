    function buscaCEP() {

        let cnpj = document.getElementById('cep').value;

       
        // Define the API URL
        const apiUrl = `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`;
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
                document.getElementById('resultado').innerHTML = ` <a href="${apiUrl}" target="_blank">Clique aqui</a>`;
               
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('cep').innerText = 'Erro ao obter dados';
            });

    }
