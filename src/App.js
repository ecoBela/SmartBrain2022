import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "f31deb97a0664700931d3a747bda9189",
});

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const calculateFaceLocation = () => {
    console.log("hello face locatoin box");
  };

  const onSubmit = () => {
    setImageUrl(input);
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, input)
      .then((response) => calculateFaceLocation(response))
      .catch((err) => console.log(err));
  };

  return (
    <div className="App">
      <ParticlesBg className="particles" type="lines" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
      <FaceRecognition imageUrl={imageUrl} />
    </div>
  );
}

export default App;
