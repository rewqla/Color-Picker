interface Props {
  red: number;
  green: number;
  blue: number;
}

const ColorPreview = ({ red, green, blue }: Props) => {
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
    </div>
  );
};

export default ColorPreview;
