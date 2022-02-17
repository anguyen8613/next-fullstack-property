import React from 'react'
import Cars from '../components/Cars';
import CarsByUsername from "../components/CarsByUsername";
import pool from './api/db/connection';

const cars = ({cars}) => {
  return (
    <div>
      <CarsByUsername />
      <Cars cars={cars} />
    </div>
  );
}

export default cars;

export async function getStaticProps(){
  let cars = [];
  try{
    cars = await pool.query('SELECT * FROM cars');
    console.log(cars.rows);

  }catch(e){
    console.log(e.message);
  }
  return {
    props: {
      cars: cars.rows
    }
  }
}

