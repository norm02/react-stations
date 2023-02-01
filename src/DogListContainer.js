// DO NOT DELETE
import React, { useEffect, useState } from 'react'
import './App.css'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(result => {
        const list = result.message
        setBreeds(Object.keys(list))
      })
  }, [])
  return (
    <select name="breed">
      {breeds.map(breed => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  )
}
