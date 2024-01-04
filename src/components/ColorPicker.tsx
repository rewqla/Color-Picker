import { useEffect, useState, useCallback } from "react";
import ColorControls from "./ColorControls";
import ColorInput from "./ColorInput";
import ColorPreview from "./ColorPreview";

const ColorPicker = () => {
  const [color, setColor] = useState({ red: 0, green: 0, blue: 0 });
  const [hex, setHex] = useState("");
  const [colorName, setColorName] = useState("");
  const [isRangeDragging, setIsRangeDragging] = useState(false);

  const convertToHex = (color: number) => {
    const hex = color.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const hexToRgb = (hex: string) => {
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    setHex(hex);

    if (match) {
      setColor({
        red: parseInt(match[1], 16),
        green: parseInt(match[2], 16),
        blue: parseInt(match[3], 16),
      });
    }
  };

  const fetchColorInfo = useCallback(async () => {
    try {
      const response = await fetch(
        `https://www.thecolorapi.com/id?rgb=(${color.red},${color.green},${color.blue})`
      );
      const data = await response.json();

      setColorName(data.name.value);
    } catch (error: any) {
      console.error("Error fetching color info:", error.message);
    }
  }, [color]);

  const generateRandomColor = () => {
    setColor({
      red: Math.floor(Math.random() * 256),
      green: Math.floor(Math.random() * 256),
      blue: Math.floor(Math.random() * 256),
    });
  };

  useEffect(() => {
    setHex(
      `#${convertToHex(color.red)}${convertToHex(color.green)}${convertToHex(
        color.blue
      )}`
    );

    if (!isRangeDragging) fetchColorInfo();
  }, [color, isRangeDragging, fetchColorInfo]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Create Your Individual Color</h1>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-8 text-center">
          <ColorPreview color={color} colorName={colorName} />

          <ColorInput
            label="red"
            value={color.red}
            setColor={(newRed) => setColor({ ...color, red: newRed })}
            setIsRangeDragging={setIsRangeDragging}
          />
          <ColorInput
            label="green"
            value={color.green}
            setColor={(newGreen) => setColor({ ...color, green: newGreen })}
            setIsRangeDragging={setIsRangeDragging}
          />
          <ColorInput
            label="blue"
            value={color.blue}
            setColor={(newBlue) => setColor({ ...color, blue: newBlue })}
            setIsRangeDragging={setIsRangeDragging}
          />
        </div>

        <ColorControls
          hex={hex}
          rgb={color}
          generateRandomColor={generateRandomColor}
          hexToRgb={hexToRgb}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
