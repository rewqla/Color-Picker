interface Props {
  hex: string;
  generateRandomColor: () => void;
}
const ColorControls = ({ hex, generateRandomColor }: Props) => {
  return (
    <div className="col-lg-8">
      <div className="row align-items-center justify-content-around">
        <div className="col-auto text-center">
          <label htmlFor="hexInput">HEX</label>
          <div className="col-auto">
            <input
              type="text"
              className="form-control"
              id="hexInput"
              value={hex}
            />
          </div>
        </div>
        <div className="col-auto mt-4">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={generateRandomColor}
          >
            Random Color
          </button>
        </div>
        <div className="col-auto mt-4">
          <button type="button" className="btn btn-primary btn-block">
            Save Color
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorControls;
