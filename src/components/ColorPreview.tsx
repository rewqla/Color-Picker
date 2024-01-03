interface Props {
  red: number;
  green: number;
  blue: number;
  colorName: string;
}
const ColorPreview = ({ red, green, blue, colorName }: Props) => {
  return (
    <div className="mb-4">
      <div
        className="rounded border"
        style={{
          width: "100%",
          height: "150px",
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></div>
      <p className="mt-2">{colorName}</p>
    </div>
  );
};

export default ColorPreview;
