
import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react'

export const CartaoPokemon = ({ name, id, image, types, height, weight, abilities, stats, base_experience }) => {



  // aqui é pro modal
  const [modalVisivel, setModalVisivel] = useState(false);

  // aqui serve pra pegar os tipos e colcocar os tipos e se nao tiver nenhum tipo informado

  const pegarTipos = () => {
    if (!types || types.length === 0) {
      return "Tipo não informado";
    }

    return types.map((item) => item.type.name).join(" | ");
  }

  // os cartões dos pokemons como o butão que leva pro modal

  return (
    <>
      <CCard style={{ width: '100%', maxWidth: '18rem', margin: '0 auto' }}>
        <CCardImage orientation="top" src={image} />
        <CCardBody>
          <CCardText>
            Nº {id}
          </CCardText>
          <CCardTitle>{name}</CCardTitle>
          <CCardText>
            {pegarTipos()}
          </CCardText>
          <CButton color="primary" onClick={() => setModalVisivel(true)}>
            Ver Detalhes
          </CButton>
        </CCardBody>
      </CCard>

      {/* Modal dos poke, tenho que lembrar de deixar bunitin */}

      <CModal
        visible={modalVisivel}
        onClose={() => setModalVisivel(false)}
        className="pokemonModal"
        alignment="center"
      >
        <CModalHeader>
          <CModalTitle>ID: {id}</CModalTitle>
        </CModalHeader>

        <CModalBody>

          <div className="pokemon-imagem-container">
            <img src={image} alt={name} className="pokemon-imagem-modal" />
          </div>

          <h3 className="pokemon-nome-modal">{name}</h3>

          <p className="pokemon-tipos-modal">
            Tipos: {pegarTipos()}
          </p>

          <h5>Status do Pokemon:</h5>

          <div className="pokemon-status-grid">
            {stats.map((item, index) => (
              <div className="pokemon-status-item" key={index}>
                <strong>
                  {item.stat.name === "special-attack" ? "Sp. Attack" :
                    item.stat.name === "special-defense" ? "Sp. Defense" :
                      item.stat.name.charAt(0).toUpperCase() + item.stat.name.slice(1)}:
                </strong>
                <span>{item.base_stat}</span>
              </div>
            ))}
          </div>

          <h5>Habilidades do Pokemon:</h5>

          <div className="pokemon-habilidades">
            {abilities.map((item, index) => (
              <span key={index}>
                {item.ability.name}
              </span>
            ))}
          </div>

          <div className="pokemon-medidas">
            <p>
              <strong>Altura:</strong> {height / 10} m
            </p>

            <p>
              <strong>Peso:</strong> {weight / 10} kg
            </p>
          </div>

          <p className="pokemon-experiencia">
            <strong>Exp. base:</strong> {base_experience}
          </p>

        </CModalBody>

        <CModalFooter>
          <CButton color="secondary" onClick={() => setModalVisivel(false)}>
            Fechar
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
