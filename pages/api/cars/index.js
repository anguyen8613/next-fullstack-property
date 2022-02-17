// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const pool = require("../db/connection");
//localhost:3000/api/cars
//get? post? put?
//app.get, app.post
//this thing will give the cars whether the frontend used get, post, put or delete

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const cars = await pool.query("SELECT * FROM cars");
      console.log(cars.rows);
      res.json(cars.rows);
    } catch (e) {
      console.log(e.message);
    }
  } else if (req.method === "POST") {
    // Handle POST HTTP method
    const car = req.body;
    try{
        const newCar = await pool.query("INSERT INTO cars(make, model, year, color) VALUES($1, $2, $3, $4) RETURNING *", [car.make, car.model, car.year, car.color]);

        console.log(newCar.rows[0]);
        res.json(newCar.rows[0]);
    }catch(e){
        console.log(e.message);
    }
  } else if (req.method === "PUT") {
    //Handle PUT HTTP method
  } else {
    //Handle DELETE HTTP method
  }
}
