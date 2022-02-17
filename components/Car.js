import {useState} from 'react'
import CarForm from './CarForm'


const Car = ({car}) => {
    const [showForm, setShowForm] = useState(false);
  function updateCar(){
    setShowForm(!showForm);
  }

  return (
    <div>
        {car.make} {car.model} {car.year} {car.color + " "}
        <button onClick={updateCar}>Update Car</button>
        {showForm?<CarForm car={car}/>: ""}
    </div>
  )
}

export default Car