// --- Função para buscar imagens e exibir na galeria (index.html) ---
async function carregarGaleria() {
    const galeriaContainer = document.getElementById('galeria-container');
    if (!galeriaContainer) return; // Garante que estamos na página correta

    const endpoints = ['neko', 'hug', 'wink', 'pat'];
    const promises = endpoints.map(endpoint => 
        fetch(`https://nekos.best/api/v2/${endpoint}`)
            .then(response => response.json())
            .then(data => data.results)
    );

    const resultados = await Promise.all(promises);
    
    resultados.flat().forEach(item => {
        const imgElement = document.createElement('img');
        imgElement.src = item.url;
        imgElement.alt = item.anime_name;
        imgElement.dataset.url = item.url; // Salva a URL para usar depois
        imgElement.addEventListener('click', () => {
            window.location.href = `detalhe.html?url=${encodeURIComponent(item.url)}`;
        });
        galeriaContainer.appendChild(imgElement);
    });
}


// --- Função para exibir imagem na página de detalhes (detalhe.html) ---
function carregarDetalhe() {
    const imagemDetalhe = document.getElementById('imagem-detalhe');
    const btnFavoritar = document.getElementById('btn-favoritar');
    if (!imagemDetalhe || !btnFavoritar) return;

    const urlParams = new URLSearchParams(window.location.search);
    const imageUrl = urlParams.get('url');
    
    if (imageUrl) {
        imagemDetalhe.src = imageUrl;
        
        // Evento de "favoritar" (simulando um POST)
        btnFavoritar.addEventListener('click', () => {
            // Lógica para salvar a imagem no localStorage
            salvarFavorito(imageUrl);
            alert('Imagem favoritada!');
        });
    }
}


// --- Função para salvar no localStorage (simulando o POST) ---
function salvarFavorito(url) {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    if (!favoritos.includes(url)) {
        favoritos.push(url);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }
}


// --- Função para exibir favoritos (favoritos.html) ---
function carregarFavoritos() {
    const favoritosContainer = document.getElementById('favoritos-container');
    if (!favoritosContainer) return;
    
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    if (favoritos.length === 0) {
        favoritosContainer.innerHTML = '<p>Nenhuma imagem favoritada ainda.</p>';
    } else {
        favoritos.forEach(url => {
            const imgElement = document.createElement('img');
            imgElement.src = url;
            imgElement.alt = 'Imagem favorita';
            favoritosContainer.appendChild(imgElement);
        });
    }
}


// --- Lógica para chamar as funções dependendo da página ---
document.addEventListener('DOMContentLoaded', () => {
    carregarGaleria();
    carregarDetalhe();
    carregarFavoritos();
});