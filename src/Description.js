import React, { useState } from 'react'
import { DogImage } from './DogImage.js'
import './App.css'

export const Description = () => {
  const [dogurl, setDogurl] = useState(
    'https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg',
  )
  const onclick_event = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(result => setDogurl(result.message))
  }
  return (
    <div>
      <h2>犬の画像を表示するアプリです</h2>
      <DogImage url={dogurl} />
      <button type="button" onClick={onclick_event}>
        更新
      </button>
    </div>
  )
}
