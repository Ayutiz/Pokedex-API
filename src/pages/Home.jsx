import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { BarraPesquisa } from '../components/BarraPesquisa';
import { CartaoPokemon } from '../components/CartoesPokemon';




// cantinho das variaveis 


export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonsOriginal, setPokemonsOriginal] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [tipos, setTipos] = useState([]);
  const [mensagemTipo, setMensagemTipo] = useState("");
  const [erro, setErro] = useState(false);
  const [tipoSelecionado, setTipoSelecionado] = useState("");
  const [pagina, setPagina] = useState(0);



  // Canto das requisições na API


  useEffect(() => {
    pegarPokemons();
    pegarTiposApi();

  }, []);

  // pegar os poke na api e junto com o Endpoint da API cuida da paginação

  const pegarPokemons = (numeroPagina = pagina) => {
    setCarregando(true);
    var endpoints = []
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${numeroPagina * 20}`)
      .then((lista) => {
        lista.data.results.forEach((pokemon) => {
          endpoints.push(pokemon.url);
        });

   // o endpoint da API

        axios.all(endpoints.map((endpoint) => axios.get(endpoint)))
          .then((res) => {
            setPokemons(res);
            setPokemonsOriginal(res);
            setErro(false);
            setCarregando(false);
          })
          .catch((err) => {
            console.log("Erro ao buscar Pokemons:", err);
            setErro(true);
            setCarregando(false);
          });


      })

  .catch ((err) => {
  console.log("Erro ao buscar lista de Pokemons:", err);
  setErro(true);
  setCarregando(false);
  });
  };

  const proximaPagina = () => {
    const novaPagina = pagina + 1;

    setPagina(novaPagina);
    pegarPokemons(novaPagina);
  };

  const paginaAnterior = () => {
    const novaPagina = pagina - 1;
    setPagina(novaPagina);
    pegarPokemons(novaPagina);
  };



//Filtrar os pokemons pelo tipo dele e aprensentar uma mensagem qunando falar

const pegarTiposApi = () => {
  axios.get("https://pokeapi.co/api/v2/type")
    .then((res) => {
      setTipos(res.data.results);
    })
    .catch((err) => console.log("Erro ao buscar tipo", err));
};

const filtrarPorTipo = (tipoNome) => {
  setTipoSelecionado(tipoNome);


  if (tipoNome === "") {
    setPokemons(pokemonsOriginal);

    setMensagemTipo("");
    return;
  }
  axios.get(`https://pokeapi.co/api/v2/type/${tipoNome}`)
    .then((res) => {
      const pokemonsDoTipoNomes = res.data.pokemon.map(p => p.pokemon.name);

      const filtrados = pokemonsOriginal.filter(p => pokemonsDoTipoNomes.includes(p.data.name));


      setPokemons(filtrados);
      setMensagemTipo(`Exibindo ${filtrados.length} Pokemons do tipo ${tipoNome.charAt(0).toUpperCase() + tipoNome.slice(1)}`);
    })
    .catch((err) => console.log(err));





}



// Filtro de pesquisa na barra de pesquisa


const pokemonFiltro = (name) => {

  var pokemonFiltrado = [];

  for (var i in pokemonsOriginal) {

    var nomePokemon = pokemonsOriginal[i].data.name.toLowerCase();
    var idPokemon = pokemonsOriginal[i].data.id.toString()



    if (
      (nomePokemon.includes(name.toLowerCase()) || idPokemon.includes(name)) &&
      (tipoSelecionado == "" ||
        pokemonsOriginal[i].data.types.some((tipo) => tipo.type.name == tipoSelecionado))

    ) {
      pokemonFiltrado.push(pokemonsOriginal[i]);
    }
  }

  setPokemons(pokemonFiltrado);
}


// Mensagem de Erro quando nao consegue chamar a API

if (erro) {
  return (
    <div style={{ paddingTop: '150px', textAlign: 'center' }}>
      <h2 style={{ color: '#d9534f' }}>Ops! Não foi possível carregar os Pokémons.</h2>
      <p>Verifique sua conexão com a internet ou tente recarregar a página mais tarde.</p>
      <img width="500px" src="/assets/erro_imagem.png"></img>
    </div>
  );
}


// Tela de carregamento

if (carregando) {
  return (
    <div style={{ paddingTop: '150px', textAlign: "center" }}>
      <h2>Carregando Pokemons...</h2>
    </div>
  )
}



// Os cartões dos pokemons e o filtro na barra de pesquisa

return (
  <div style={{ paddingTop: '90px' }}>
    <BarraPesquisa pokemonFiltro={pokemonFiltro} tipos={tipos} filtrarPorTipo={filtrarPorTipo} />

    <Container maxWidth="xl">
      {mensagemTipo && (
        <div style={{ margin: '20px 0', textAlign: 'center', fontWeight: 'bold' }}>
          <p>{mensagemTipo}</p>
        </div>
      )}


      {pokemons.length === 0 && (
        <p style={{ textAlign: 'center', width: '100%' }}>
          Nenhum Pokemon encontrado ou tu errou o nome besta
        </p>
      )}


      <Grid container spacing={2}>
        {pokemons.map((pokemon, key) =>
          <Grid item xs={12} sm={5} lg={2} key={key}>
            <CartaoPokemon name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} id={pokemon.data.id}
              height={pokemon.data.height} weight={pokemon.data.weight} abilities={pokemon.data.abilities} stats={pokemon.data.stats} />
          </Grid>
        )}
      </Grid>

      <div className='botoesPagina'>
        <button onClick={paginaAnterior} disabled={pagina === 0}>
          Anterior
        </button>
       
      <button onClick={proximaPagina}>
        Proximo
      </button>


      </div>

    </Container>
  </div>
);
};
