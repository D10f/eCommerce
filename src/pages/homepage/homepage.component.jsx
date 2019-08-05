import React from 'react'

import MenuDirectory from '../../components/menu-directory/menu-directory.component';

/*
  import './homepage.styles.scss'
  Replacing the scss files with styled components. This is what's called CSS-in-JS
*/

import { HomePageContainer } from './homepage.styles'

const HomePage = () => {
  return (
    <HomePageContainer>
      <MenuDirectory />
    </HomePageContainer>
  )
}

export default HomePage
