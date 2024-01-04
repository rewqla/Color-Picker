import InputRange from "./InputRange";

interface Props {
  label: string;
  value: number;
  setColor: (value: number) => void;
  setIsRangeDragging: (value: boolean) => void;
}

const ColorInput = ({ label, value, setColor, setIsRangeDragging }: Props) => {
  return (
    <div className="form-group mb-4">
      <label
        htmlFor="redRange"
        style={{ color: label, textTransform: "capitalize" }}
      >
        {label}
      </label>
      <InputRange
        value={value}
        setValue={setColor}
        setIsRangeDragging={setIsRangeDragging}
      />
      <span className="d-block mt-2">{value}</span>
    </div>
  );
};

export default ColorInput;
