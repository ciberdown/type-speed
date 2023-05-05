import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WritingArea from "./components/WritingArea";
import { useState } from "react";

function App() {
  const [mistake, setMistake] = useState(0);
  function addMistake(){
    setMistake(mistake+1);
    console.log(mistake)
  }
  return (
    <div tabIndex={0} className="w-100 min-vh-100 bg-black p-5">
      <h1 className="mistakes text-danger inline p-3">mistakes: {mistake}</h1>
      <span id="parent" className="text-white">
        <p id="colored" className="bg-warning d-inline text-black">
          L
        </p>
        <p id="paragraph" className="d-inline">
          orem, ipsum dolor sit amet consectetur adipisicing elit. Sed ratione
          facilis quibusdam harum. Cum officiis magni nesciunt, sint
          perspiciatis atque non facere aut quod veniam. Vitae tenetur ipsam
          amet itaque.
        </p>
      </span>
      <WritingArea addMistake={addMistake} />
    </div>
  );
}

export default App;
