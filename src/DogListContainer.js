// DO NOT DELETE
import React, { useEffect, useState } from 'react'
import { BreedsSelect } from './BreedsSelect'
import './App.css'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('borzoi')
  const [dogList, setdogList] = useState([])
  const onchange_handle = e => setSelectedBreed(e.target.value)
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(result => {
        const list = result.message
        setBreeds(Object.keys(list))
      })
  }, [])

  function getAPI(type) {
    fetch('https://dog.ceo/api/breed/' + type + '/images/random/12')
      .then(res => res.json())
      .then(result => {
        setdogList(result.message)
      })
  }
  const breedImages = dogList.map(image => {
    return (
      <div className="dogImage" key={Image}>
        <img src={Image} key={Image} />
      </div>
    )
  })

  return (
    <div>
      <BreedsSelect
        breeds={breeds}
        select={selectedBreed}
        change={onchange_handle}
      ></BreedsSelect>
      <button onClick={() => getAPI(selectedBreed)}>表示</button>
      <br />
      {breedImages}
    </div>
  )
}

