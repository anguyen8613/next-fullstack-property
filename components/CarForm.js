import { useRouter } from "next/router";
import { useRef, useEffect } from "react";

const CarForm = ({ car }) => {
  const makeRef = useRef();
  const modelRef = useRef();
  const yearRef = useRef();
  const colorRef = useRef();
  const router = useRouter();
  useEffect(() => {
    makeRef.current.value = car.make;
    modelRef.current.value = car.model;
    yearRef.current.value = car.year;
    colorRef.current.value = car.color;
  });
  async function submitForm(e) {
    e.preventDefault();
    const updatedCar = {
      make: makeRef.current.value,
      model: modelRef.current.value,
      year: yearRef.current.value,
      color: colorRef.current.value,
    };
    const id = car.id;
    try {
      
      const url = "/api/cars/" + id;
      const response = await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedCar),
      });
      const car = await response.json();
      console.log(car);
      router.reload();
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <form onSubmit={submitForm}>
        <div>
          <label>make</label>
          <input ref={makeRef} type="text" />
        </div>
        <div>
          <label>model</label>
          <input ref={modelRef} type="text" />
        </div>
        <div>
          <label>year</label>
          <input ref={yearRef} type="text" />
        </div>
        <div>
          <label>color</label>
          <input ref={colorRef} type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CarForm;
