import InputRange from "./InputRange";

interface Props {
  label: string;
  value: number;
  setColor: (value: number) => void;
}

const ColorInput = ({ label, value, setColor }: Props) => {
  return (
    <div className="form-group mb-4">
      <label
        htmlFor="redRange"
        style={{ color: label, textTransform: "capitalize" }}
      >
        {label}
      </label>
      <InputRange value={value} setValue={setColor} />
      <span className="d-block mt-2">{value}</span>
    </div>
  );
};

export default ColorInput;
