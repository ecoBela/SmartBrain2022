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

console.log(Clarifai);

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  // const [box, setBox] = useState({});

  // const calculateFaceLocation = (data) => {
  //   const ClarifaiFace =
  //     data.outputs[0].data.regions[0].region_info_bounding_box;
  //   const image = document.getElementById("inputImage");
  //   const width = Number(image.width);
  //   const height = Number(image.height);
  //   console.log(width, height);
  // };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onSubmit = () => {
    setImageUrl(input);
    console.log("howdy: before");
    app.models
      .predict("a403429f2ddf4b49b307e318f00e528b", input)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    console.log("howdy: after");
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
