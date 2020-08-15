import React from "react";
import Navbar from "./Components/Nav/NavBar";
import Home from "./Components/Home";
import InfoContainer from "./Components/Info/InfoContainer";
import Location from "./Components/Location";
import Inscription from "./Components/Inscription";

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Navbar />
      <Home />
      <InfoContainer />
      <Location />
      <Inscription />
    </div>
  );
}

export default App;
