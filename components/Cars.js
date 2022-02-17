import React, {useState} from 'react'
import Car from './Car'
import CarForm from './CarForm'

const Cars = ({cars}) => {

  return (
    <div>
        {cars.map((car) => (
            <Car key={car.id} car={car}/>
        ))}
    </div>
  )
}

export default Cars