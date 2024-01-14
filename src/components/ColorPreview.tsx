import { ColorRgb } from "../interfaces/ColorRgb";

interface Props {
  color: ColorRgb;
  colorName: string;
}
const ColorPreview = ({ color, colorName }: Props) => {
  const { red, green, blue } = color;

  return (
    <div className="mb-4">
      <div
        className="rounded border"
        data-testid="color-preview"
        style={{
          width: "100%",
          height: "150px",
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></div>
      <p className="mt-2" data-testid="color-name">
        {colorName}
      </p>
    </div>
  );
};

export default ColorPreview;
