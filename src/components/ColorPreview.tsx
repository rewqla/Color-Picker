interface Props {
  color: {
    red: number;
    green: number;
    blue: number;
  };
  colorName: string;
}
const ColorPreview = ({ color, colorName }: Props) => {
  const { red, green, blue } = color;

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
