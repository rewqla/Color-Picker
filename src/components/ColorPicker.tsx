import { useEffect, useState } from "react";
import ColorControls from "./ColorControls";
import ColorInput from "./ColorInput";
import ColorPreview from "./ColorPreview";

const ColorPicker = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [hex, setHex] = useState("");

  const convertToHex = (color: number) => {
    const hex = color.toString(16);
    console.log(hex);
    return hex.length === 1 ? "0" + hex : hex;
  };

  useEffect(() => {
    setHex(`#${convertToHex(red)}${convertToHex(green)}${convertToHex(blue)}`);
  }, [red, green, blue]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Create Your Individual Color</h1>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-8 text-center">
          <ColorPreview red={red} green={green} blue={blue} />

          <ColorInput label="red" value={red} setColor={setRed} />
          <ColorInput label="green" value={green} setColor={setGreen} />
          <ColorInput label="blue" value={blue} setColor={setBlue} />
        </div>

        <ColorControls hex={hex} />
      </div>
    </div>
  );
};

export default ColorPicker;
