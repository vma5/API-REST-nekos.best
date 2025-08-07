# API-REST-nekos.best

## Nekos.best Front-End

## Victor Martins Almeida 

## Descrição e Objetivo
Este projeto é um front-end simples desenvolvido com HTML, CSS e JavaScript que consome a API Nekos
best para exibir uma galeria de imagens e GIFs temáticos de anime. O objetivo principal é
demonstrar o consumo de uma API pública, utilizando diferentes métodos de requisição (GET e um
conceito de POST), e a manipulação do DOM para criar uma interface de usuário dinâmica.

## O projeto é dividido em três páginas principais:

Galeria: Exibe uma coleção de imagens aleatórias obtidas da API.

Detalhes: Mostra uma imagem individual em tamanho maior, permitindo ao usuário "favoritá-la".

Favoritos: Lista todas as imagens que foram salvas pelo usuário no armazenamento local do navegador.

## Tecnologias Utilizadas
HTML5: Para estruturação das páginas.

CSS3: Para estilização e layout, garantindo um design responsivo.

JavaScript (Vanilla): Para toda a lógica de requisição à API (usando fetch) e manipulação dos
elementos da página.

API Nekos.best: Fonte de dados para imagens e GIFs.

### Tabela de Requisições

| **Página** | **Tipo de Requisição** | **Endpoint** |
| :--- | :--- | :--- |
| `index.html` | GET | `posts/` |
| `delete.html` | DELETE | `posts/` |
| ` favoritos.html` | POST | `localStorage/`| 

## Créditos
API Nekos.best: https://docs.nekos.best/api/reference.html - A fonte de todas as imagens e GIFs do projeto.

MDN Web Docs: https://developer.mozilla.org/ - Documentação essencial para desenvolvimento web com HTML, CSS e JavaScript.
