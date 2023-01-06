import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";

function App() {
  const [input, setInput] = useState("");
  const onInputChange = (event) => {
    console.log(event.target.value);
  };
  const onSubmit = () => {
    console.log("click");
  };

  return (
    <div className="App">
      <ParticlesBg className="particles" type="lines" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />

      <FaceRecognition />
    </div>
  );
}

export default App;
