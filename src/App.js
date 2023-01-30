// DO NOT DELETE

import React, { useState } from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogurl, setDogurl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )
  return (
    <header>
      <h1>Dogアプリ</h1>
      <description>犬の画像を表示するアプリです</description>
      <input
        type="text"
        placeholder="犬の画像"
        onChange={e => setDogurl(e.target.value)}
      />
      (
      <img src={dogurl} alt="Displayed" />)
    </header>
  )
}
