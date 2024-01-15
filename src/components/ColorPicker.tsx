import useColorPicker from "../hooks/useColorPicker";
import Color from "../interfaces/Color";
import { useAppSelector } from "../store/configureStore";
import ColorControls from "./ColorControls";
import ColorInput from "./ColorInput";
import ColorPreview from "./ColorPreview";
import Spinner from "./Spinner";

interface Props {
  selectedColor: Color | null;
}

const ColorPicker = ({ selectedColor }: Props) => {
  const {
    color,
    setColor,
    colorName,
    hexToRgb,
    setIsRangeDragging,
    generateRandomColor,
  } = useColorPicker({ selectedColor });

  const loading = useAppSelector((state) => state.isLoading.isLoading);

  if (loading) return <Spinner />;

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Create Your Individual Color</h1>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-8 text-center">
          <ColorPreview color={color.rgb} colorName={colorName} />

          <ColorInput
            label="red"
            value={color.rgb.red}
            setColor={(newRed) =>
              setColor((prevState) => ({
                ...prevState,
                rgb: { ...prevState.rgb, red: newRed },
              }))
            }
            setIsRangeDragging={setIsRangeDragging}
          />
          <ColorInput
            label="green"
            value={color.rgb.green}
            setColor={(newGreen) =>
              setColor((prevState) => ({
                ...prevState,
                rgb: { ...prevState.rgb, green: newGreen },
              }))
            }
            setIsRangeDragging={setIsRangeDragging}
          />
          <ColorInput
            label="blue"
            value={color.rgb.blue}
            setColor={(newBlue) =>
              setColor((prevState) => ({
                ...prevState,
                rgb: { ...prevState.rgb, blue: newBlue },
              }))
            }
            setIsRangeDragging={setIsRangeDragging}
          />
        </div>

        <ColorControls
          color={color}
          generateRandomColor={generateRandomColor}
          hexToRgb={hexToRgb}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
