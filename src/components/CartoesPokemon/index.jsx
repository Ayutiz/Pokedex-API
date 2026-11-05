
import React from 'react'
import { CButton, CCard, CCardBody, CCardImage, CCardText, CCardTitle } from '@coreui/react'

export const CartaoPokemon = ({ name, image, types }) => {

  const pegarTipos = () => {
    if(types[1]){
      return types[0].type.name + " | " + types[1].type.name
    }
      return types[0].type.name
  }

  return (
    <CCard style={{ width: '18rem' }}>
      <CCardImage orientation="top" src={image} />
      <CCardBody>
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
