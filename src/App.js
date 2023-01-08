import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";
import Clarifai from "clarifai";
import { apiKey } from "./config";

// previous api key has been destroyed and new one created and stored safely.
const app = new Clarifai.App({
  apiKey: apiKey,
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
    console.log(event.target.value);
    setInput(event.target.value);
  };

  console.log(Clarifai);

  const onSubmit = () => {
    setImageUrl(input);
    console.log("howdy: before");
    app.models
      .predict(
        {
          id: Clarifai.FACE_DETECT_MODEL,
          version: "34ce21a40cc24b6b96ffee54aabff139",
        },
        input
      )
      .then((response) => console.log("Response", response))
      .catch((err) => console.log("ERROR", err));
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
