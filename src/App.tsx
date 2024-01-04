import SavedColors from "./components/SavedColors";
import ColorPicker from "./components/ColorPicker";
import { useState } from "react";
import Color from "./interfaces/Color";

function App() {
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);

  return (
    <div className="container mt-5">
      <div className="column">
        <div className="col-lg-12">
          <ColorPicker selectedColor={selectedColor} />
        </div>
        <div className="col-lg-12">
          <SavedColors onColorSelect={setSelectedColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
