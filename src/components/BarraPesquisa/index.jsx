
import React, { useState } from 'react'
import {
  CButton,
  CCollapse,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CFormInput,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavbarToggler,
  CNavItem,
  CNavLink,
} from '@coreui/react'

export const BarraPesquisa = ({ pokemonFiltro, tipos, filtrarPorTipo }) => {
  const [visible, setVisible] = useState(false)
  return (
    <CNavbar expand="lg" colorScheme="dark" className="bg-dark text-white mb-3 border border-secondary"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1030
      }}
    >
      <CContainer fluid>
        <CNavbarBrand href="#"><img src="/assets/pokemon_logo.jpg" width="200px" /></CNavbarBrand>
        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="me-auto">
            <CNavItem>
              <CNavLink href="#" active>
                Inicio
              </CNavLink>
            </CNavItem>


            {/* Menu de Tipos */}

            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary">Filtrar por Tipo</CDropdownToggle>
              <CDropdownMenu style={{ maxHeight: '300px', overflowY: 'auto' }}>
        
                <CDropdownItem onClick={() => filtrarPorTipo("")} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                  Todos os Tipos
                </CDropdownItem>
                <CDropdownDivider />

                
                {tipos.map((tipo, index) => (
                  <CDropdownItem 
                    key={index} 
                    onClick={() => filtrarPorTipo(tipo.name)}
                    style={{ cursor: 'pointer', textTransform: 'capitalize' }}
                  >
                    {tipo.name}
                  </CDropdownItem>
                ))}
              </CDropdownMenu>
            </CDropdown>



          </CNavbarNav>
          <CForm className="d-flex">
            <CFormInput type="search" onChange={(e) => pokemonFiltro(e.target.value)} className="me-2" placeholder="Nome do Pokemon/id" />
            <CButton type="submit" color="danger" variant="outline">
              Pesquisar
            </CButton>
          </CForm>



        </CCollapse>
      </CContainer>
    </CNavbar>
  )
}
