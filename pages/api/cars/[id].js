const pool = require("../db/connection");

export default async function handler(req, res) {
  const id = req.query.id;
  if (req.method === "GET") {
    try {
      const car = await pool.query("SELECT * FROM cars where id =$1", [id]);
      console.log(car.rows[0]);
      res.json(car.rows[0]);
    } catch (e) {
      console.log(e.message);
    }
  } else if (req.method === "DELETE") {
    try {
      const car = await pool.query(
        "DELETE FROM cars WHERE id = $1 RETURNING *",
        [id]
      );
      console.log(car.rows[0]);
      res.json(car.rows[0]);
    } catch (e) {
      console.log(e.message);
    }
  }else if(req.method === "PUT"){
      const car = req.body;
      try{
        const updatedCar = await pool.query("UPDATE cars set make=$1, model=$2, year=$3, color=$4 WHERE id = $5 RETURNING *", [car.make, car.model, car.year, car.color, id]);
        console.log(updatedCar.rows[0]);
        res.json(updatedCar.rows[0]);
      }catch(e){
          console.log(e.message);
      }
  }
}
