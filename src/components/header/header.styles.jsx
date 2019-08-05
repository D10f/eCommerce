import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

// This will be used to share styles accross components, see below the links
const NavLinkStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`

export const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`

export const LinkContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  ${NavLinkStyles}
`

export const DivLink = styled(Link)`
  ${NavLinkStyles}
`
