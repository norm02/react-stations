// DO NOT DELETE

import React from 'react'
import { Header } from './Header.js'
import './App.css'
import { Description } from './Description.js'
import { DogListContainer } from './DogListContainer.js'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <Header />
      <Description />
      <DogListContainer />
    </div>
  )
}
