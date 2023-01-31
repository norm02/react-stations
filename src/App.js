// DO NOT DELETE

import React, { useState } from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogurl, setDogurl] = useState(
    'https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg',
  )
  const onclick_event = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(result => setDogurl(result.message))
  }

  return (
    <header className="App-header">
      <h1>Dogアプリ</h1>
      <h2>犬の画像を表示するアプリです</h2>
      <img src={dogurl} alt="Displayed" />
      <button type="button" onClick={onclick_event}>
        更新
      </button>
    </header>
  )
}
