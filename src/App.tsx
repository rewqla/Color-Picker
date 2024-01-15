import SavedColors from "./components/SavedColors";
import ColorPicker from "./components/ColorPicker";
import { useState } from "react";
import Color from "./interfaces/Color";
import { useAppSelector } from "./store/configureStore";

function App() {
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const loading = useAppSelector((state) => state.isLoading.isLoading);

  return (
    <div className="container mt-5">
      <div className="column">
        <div className="col-lg-12">
          <ColorPicker selectedColor={selectedColor} />
        </div>
        {!loading && (
          <div className="col-lg-12">
            <SavedColors onColorSelect={setSelectedColor} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
