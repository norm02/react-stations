// DO NOT DELETE
import * as React from 'react'
import './App.css'
export const BreedsSelect = props => {
  const breedlist = props.breeds.map(breed => (
    <option key={breed} value={breed}>
      {breed}
    </option>
  ))
  return (
    <select value={props.select} onChange={props.change}>
      {breedlist}
    </select>
  )
}
