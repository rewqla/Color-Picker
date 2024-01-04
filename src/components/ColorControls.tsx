import { setSavedColors } from "../store/slices/localStorageSlice";
import { useAppDispatch } from "../store/configureStore";

interface Props {
  hex: string;
  rgb: {
    red: number;
    green: number;
    blue: number;
  };
  generateRandomColor: () => void;
  hexToRgb: (hex: string) => void;
}

const ColorControls = ({ hex, rgb, generateRandomColor, hexToRgb }: Props) => {
  const dispatch = useAppDispatch();

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
              onChange={(e) => hexToRgb(e.target.value)}
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
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={() => dispatch(setSavedColors({ rgb: rgb, hex: hex }))}
          >
            Save Color
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorControls;
