import { useState, useCallback, useEffect } from "react";
import Color from "../interfaces/Color";

const useColorPicker = (selectedColor: Color | null) => {
  const initialColor: Color = {
    rgb: { red: 0, green: 0, blue: 0 },
    hex: "",
  };

  const [color, setColor] = useState<Color>(initialColor);
  const [colorName, setColorName] = useState("");
  const [isRangeDragging, setIsRangeDragging] = useState(false);

  const convertToHex = (color: number) => {
    const hex = color.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  const hexToRgb = (hex: string) => {
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);

    if (match) {
      const newRgb = {
        red: parseInt(match[1], 16),
        green: parseInt(match[2], 16),
        blue: parseInt(match[3], 16),
      };

      setColor((prevState) => ({
        ...prevState,
        rgb: newRgb,
        hex: `#${convertToHex(newRgb.red)}${convertToHex(
          newRgb.green
        )}${convertToHex(newRgb.blue)}`,
      }));
    } else {
      setColor((prevState) => ({
        ...prevState,
        hex: hex,
      }));
    }
  };

  const fetchColorInfo = useCallback(async () => {
    try {
      const response = await fetch(
        `https://www.thecolorapi.com/id?rgb=(${color.rgb.red},${color.rgb.green},${color.rgb.blue})`
      );
      const data = await response.json();

      setColorName(data.name.value);
    } catch (error: any) {
      console.error("Error fetching color info:", error.message);
    }
  }, [color]);

  const generateRandomColor = () => {
    setColor({
      ...color,
      rgb: {
        red: Math.floor(Math.random() * 256),
        green: Math.floor(Math.random() * 256),
        blue: Math.floor(Math.random() * 256),
      },
    });
  };

  useEffect(() => {
    if (selectedColor) {
      setColor((prevState) => ({
        ...prevState,
        rgb: { ...selectedColor.rgb },
      }));
    }
  }, [selectedColor]);

  useEffect(() => {
    setColor((prevState) => ({
      ...prevState,
      hex: `#${convertToHex(prevState.rgb.red)}${convertToHex(
        prevState.rgb.green
      )}${convertToHex(prevState.rgb.blue)}`,
    }));
  }, [color.rgb]);

  useEffect(() => {
    if (!isRangeDragging) {
      fetchColorInfo();
    }
  }, [isRangeDragging, fetchColorInfo]);

  return {
    color,
    setColor,
    colorName,
    hexToRgb,
    setIsRangeDragging,
    generateRandomColor,
  };
};

export default useColorPicker;
