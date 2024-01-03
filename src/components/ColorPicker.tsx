import { useEffect, useState, useCallback } from "react";
import ColorControls from "./ColorControls";
import ColorInput from "./ColorInput";
import ColorPreview from "./ColorPreview";

const ColorPicker = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [hex, setHex] = useState("");
  const [colorName, setColorName] = useState("");

  const convertToHex = (color: number) => {
    const hex = color.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const fetchColorInfo = useCallback(async () => {
    try {
      const response = await fetch(
        `https://www.thecolorapi.com/id?rgb=(${red},${green},${blue})`
      );
      const data = await response.json();

      setColorName(data.name.value);
    } catch (error: any) {
      console.error("Error fetching color info:", error.message);
    }
  }, [red, green, blue]);

  useEffect(() => {
    setHex(`#${convertToHex(red)}${convertToHex(green)}${convertToHex(blue)}`);
    fetchColorInfo();
  }, [red, green, blue, hex, fetchColorInfo]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Create Your Individual Color</h1>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-8 text-center">
          <ColorPreview
            red={red}
            green={green}
            blue={blue}
            colorName={colorName}
          />

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
