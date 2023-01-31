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
  console.log('click')

  const buttonclick = () => {
    const newdogurl =
      'https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg'
    setDogurl(newdogurl)
  }

  return (
    <header>
      <h1>Dogアプリ</h1>
      <description>犬の画像を表示するアプリです</description>
      <img src={dogurl} alt="Displayed" />
      <button type="button" onClick={e => setDogurl(buttonclick)}>
        更新
      </button>
    </header>
  )
}
