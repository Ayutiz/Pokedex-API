
import React, { useState } from 'react'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react'

export const CartaoPokemon = ({ name, id, image, types, height, weight, abilities, stats }) => {



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
      <CCard style={{ width: '18rem' }}>
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
            Go somewhere
          </CButton>
        </CCardBody>
      </CCard>

    {/* Modal dos poke, tenho que lembrar de deixar bunitin */}

      <CModal visible={modalVisivel} onClose={() => setModalVisivel(false)}>
        <CModalHeader>
          <CModalTitle>{name}</CModalTitle>
        </CModalHeader>

        <CModalBody>
          <p>Número: {id}</p>
          <img src={image} />
          <p>Tipos: {pegarTipos()}</p>
          <p>Altura: {height / 10}m</p>
          <p>Peso: {weight / 10}kg</p>
        
          <p>Status:</p>

          <ul>
            {stats.map((item,index) => (
              <li key={index}>
                {item.stat.name}: {item.base_stat}
              </li>
            )
          
          
          )}
          </ul>



          <p>Habilidades</p>

          <ul>
            {abilities.map((item, index) => (
              <li key={index}> {item.ability.name} </li>
            ))}
          </ul>

        </CModalBody>

        <CModalFooter>
          <CButton color='secondary' onClick={() => setModalVisivel(false)}>
            Fechar
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  )
}
