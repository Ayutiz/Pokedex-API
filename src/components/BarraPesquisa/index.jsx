
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

export const BarraPesquisa = ({pokemonFiltro}) => {
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
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Something else here</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>



          </CNavbarNav>
          <CForm className="d-flex">
            <CFormInput type="search" onChange={(e) => pokemonFiltro(e.target.value)}  className="me-2" placeholder="Nome do Pokemon/id" />
            <CButton type="submit" color="danger" variant="outline">
              Pesquisar
            </CButton>
          </CForm>



        </CCollapse>
      </CContainer>
    </CNavbar>
  )
}
