import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import Logo from "./components/Logo/Logo";
import SignIn from "./components/SignIn/SignIn";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";
import Clarifai from "clarifai";
import { apiKey } from "./config";

const app = new Clarifai.App({
  apiKey: apiKey,
});

function App() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [box, setBox] = useState({});
  const [route, setRoute] = useState("SignIn");

  const calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);

    return {
      bottomRow: height - clarifaiFace.bottom_row * height,
      leftCol: clarifaiFace.left_col * width,
      rightCol: width - clarifaiFace.right_col * width,
      topRow: clarifaiFace.top_row * height,
    };
  };

  const displayFaceBox = (box) => {
    console.log({ box });
    setBox(box);
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onSubmit = () => {
    setImageUrl(input);
    app.models
      .predict(
        {
          id: Clarifai.FACE_DETECT_MODEL,
          version: "34ce21a40cc24b6b96ffee54aabff139",
        },
        input
      )
      .then((response) => displayFaceBox(calculateFaceLocation(response)))
      .catch((err) => console.log("ERROR", err));
  };

  return (
    <div className="App">
      <ParticlesBg className="particles" type="lines" bg={true} />
      <Navigation />
      {route === "SignIn" && (
        <div>
          <SignIn />
          <Logo />
          <Rank />
          <ImageLinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
      )}
    </div>
  );
}

export default App;
