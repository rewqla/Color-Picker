interface Props {
  value: number;
  setValue: (value: number) => void;
  setIsRangeDragging: (value: boolean) => void;
}
const InputRange = ({ value, setValue, setIsRangeDragging }: Props) => {
  const handleMouseDown = () => {
    setIsRangeDragging(true);
  };

  const handleMouseUp = () => {
    setIsRangeDragging(false);
  };

  return (
    <input
      type="range"
      className="form-range"
      style={{ width: "100%" }}
      id="greenRange"
      min="0"
      max="255"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      value={value}
      onChange={(e) => {
        setValue(Number(e.target.value));
      }}
    />
  );
};

export default InputRange;
