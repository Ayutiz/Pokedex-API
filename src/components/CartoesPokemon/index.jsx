
import React from 'react'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'

export const CartaoPokemon = ({ name, id, image, types }) => {

  const pegarTipos = () => {
  if (!types || types.length === 0) {
    return "Tipo não informado";
  }

  return types.map((item) => item.type.name).join(" | ");
}

  return (
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
        <CButton color="primary" href="#">
          Go somewhere
        </CButton>
      </CCardBody>
    </CCard>
  )
}
