# Pokédex

## 1. Sobre o projeto

Este projeto consiste em uma Pokédex desenvolvida utilizando React JS. A aplicação utiliza a PokéAPI para buscar e exibir informações sobre os Pokémon.

O objetivo é permitir que o usuário consulte os Pokémon, pesquise pelo nome ou ID, filtre por tipo e visualize informações mais completas de cada um.

## 2. Tecnologias utilizadas

Para desenvolver o projeto, foram utilizadas as seguintes tecnologias:

- React JS: desenvolvimento da interface.
- JavaScript: lógica da aplicação.
- Axios: realização das requisições à API.
- Material UI: componentes e organização da interface.
- CoreUI: componentes visuais.
- CSS: estilização da aplicação.

## 3. Como instalar e executar o projeto

Para executar o projeto, é necessário ter o Node.js instalado no computador.

**Passo 1:** Baixe ou clone o repositório do projeto.

**Passo 2:** Abra a pasta do projeto no terminal.

**Passo 3:** Instale as dependências necessárias utilizando o comando:

```bash
npm install
```

**Passo 4:** Após a instalação, inicie a aplicação com:

```bash
npm start
```

**Passo 5:** Aguarde a aplicação iniciar. Ela ficará disponível no navegador, normalmente no endereço:

http://localhost:3000

## 4. Como utilizar a aplicação

Após abrir a aplicação no navegador, o usuário poderá utilizar as seguintes funcionalidades:

**Listagem de Pokémon:** na tela inicial são exibidos os Pokémon com seus nomes, números, imagens e tipos.

**Pesquisa:** utilize a barra de pesquisa para encontrar um Pokémon pelo nome ou ID.

**Filtro por tipo:** selecione um tipo de Pokémon para visualizar os Pokémon associados a ele.

**Paginação:** utilize os botões de avançar e voltar para navegar entre as páginas da listagem.

**Detalhes do Pokémon:** selecione um card para abrir o modal com informações como altura, peso, habilidades, estatísticas e imagem.

## 5. API utilizada

A aplicação utiliza a PokéAPI, uma API pública e gratuita que disponibiliza informações sobre os Pokémon.

Site da API: https://pokeapi.co/

Os dados são obtidos através de requisições HTTP utilizando o Axios.

Foram utilizados principalmente os seguintes endpoints:

- `/pokemon`: para buscar a lista de Pokémon.
- `/pokemon/{id ou nome}`: para buscar os detalhes de cada Pokémon.
- `/type`: para buscar os tipos disponíveis.

## 6. Organização do código

O projeto foi dividido em componentes para facilitar a organização e manutenção do código.

- **Home.jsx:** responsável pela página principal, requisições à API, paginação e gerenciamento dos dados.
- **BarraPesquisa:** responsável pela pesquisa e pelos filtros.
- **CartoesPokemon:** responsável pela exibição dos cards e dos detalhes dos Pokémon.
- **App.js:** responsável pela estrutura principal da aplicação.

## 7. Decisões de implementação

Durante o desenvolvimento, utilizei o `useState` para controlar os estados da aplicação, como os Pokémon carregados, pesquisas e filtros.

Também utilizei o `useEffect` para executar as requisições à API quando necessário.

Escolhi o Axios para facilitar a comunicação com a PokéAPI e utilizei componentes separados para deixar o código mais organizado e facilitar futuras alterações.

A paginação foi utilizada para carregar os Pokémon em grupos de 20, tornando a navegação mais organizada.