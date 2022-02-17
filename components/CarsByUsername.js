import React, { useRef, useState } from "react";

const CarsByUsername = () => {
  const userRef = useRef();
  const [cars, setCars] = useState([]);

  async function changeUser() {
    console.log(userRef.current.value);
    const name = userRef.current.value;

    //localhost:3000/api/cars
    //xxxxxxx/api/cars
    const url = "/api/cars/name/" + name;

    try {
      const response = await fetch(url);
      const cars = await response.json();
      console.log(cars);
      setCars(cars);
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <div>
      <select ref={userRef} onChange={changeUser}>
        <option value="Ryan Nguyen">Ryan</option>
        <option value="Alvin Nguyen">Alvin</option>
        <option value="Angie Truong">Angie</option>
      </select>
      {cars.map((car) => (
        <div key={car.id}>{car.make}</div>
      ))}
    </div>
  );
};

export default CarsByUsername;
