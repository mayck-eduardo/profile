function buscaCEP() {
    document.getElementById('titulo').innerText = 'Buscando CEP...';
    setTimeout(buscaCEP02, 2000); // 2 segundos (ajuste o tempo se quiser)
}

function buscaCEP02() {
    let cep = document.getElementById('cep').value;

    const apiUrl = `https://brasilapi.com.br/api/cep/v1/${cep}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('titulo').innerText = 'Resultado da Busca';
            document.getElementById('cidade').innerText = `Cidade: ${data.city} - ${data.state}`;
            document.getElementById('bairro').innerText = `Bairro: ${data.neighborhood}`;
            document.getElementById('rua').innerText = `Rua: ${data.street}`;
            localStorage.setItem('dados', JSON.stringify(data));
            const date = new Date();
            // constante das horas
            const hours = date.getHours().toString().padStart(2, '0'); // Formata horas com dois dígitos
            const minutes = date.getMinutes().toString().padStart(2, '0'); // Formata minutos com dois dígitos
            //formata a data como HH:MM : DD/MM/YYYY
            const formattedDate = `${hours}:${minutes} : ${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
            localStorage.setItem('data', formattedDate);
            document.getElementById('data').innerText = localStorage.getItem('data');
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('titulo').innerText = 'Erro ao obter dados';
        });
}
