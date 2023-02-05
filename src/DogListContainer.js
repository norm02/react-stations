// DO NOT DELETE
import React, { useEffect, useState } from 'react'
import { BreedsSelect } from './BreedsSelect'
import './App.css'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(result => {
        const list = result.message
        setBreeds(Object.keys(list))
      })
  }, [])
  const onchange_handle = e => setSelectedBreed(e.target.value)
  return (
    <BreedsSelect
      breeds={breeds}
      select={selectedBreed}
      change={onchange_handle}
    ></BreedsSelect>
  )
}
