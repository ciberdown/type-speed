import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WritingArea from "./components/WritingArea";
function App() {
  return (
    <div tabIndex={0} className="w-100 min-vh-100 bg-black p-5">
      <span className="text-white">
        <p id="colored" className="bg-warning d-inline border text-black">
          L
        </p>
        <p id="paragraph"
        className="d-inline">
          orem, ipsum dolor sit amet consectetur adipisicing elit. Sed ratione
          facilis quibusdam harum. Cum officiis magni nesciunt, sint
          perspiciatis atque non facere aut quod veniam. Vitae tenetur ipsam
          amet itaque.
        </p>
      </span>
      <WritingArea />
    </div>
  );
}

export default App;
