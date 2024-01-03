import React from "react";
import "./App.css";
import SavedColors from "./components/SavedColors";
import ColorPicker from "./components/ColorPicker";

function App() {
  return (
    <div className="container mt-5">
      <div className="column">
        <div className="col-lg-12">
          <ColorPicker />
        </div>
        <div className="col-lg-12">
          <SavedColors />
        </div>
      </div>
    </div>
  );
}

export default App;
