interface Props {
  value: number;
  setValue: (value: number) => void;
}
const InputRange = ({ value, setValue }: Props) => {
  return (
    <input
      type="range"
      className="form-range"
      style={{ width: "100%" }}
      id="greenRange"
      min="0"
      max="255"
      value={value}
      onChange={(e) => {
        setValue(Number(e.target.value));
      }}
    />
  );
};

export default InputRange;
