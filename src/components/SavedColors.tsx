import { useEffect } from "react";
import Color from "../interfaces/Color";
import {
  deleteSavedColors,
  retrieveSavedColors,
} from "../store/slices/localStorageSlice";
import { useAppDispatch, useAppSelector } from "../store/configureStore";

interface Props {
  onColorSelect: (color: Color) => void;
}

const SavedColors = ({ onColorSelect }: Props) => {
  const dispatch = useAppDispatch();
  const savedColors = useAppSelector((state) => state.localStorage.savedColors);

  useEffect(() => {
    dispatch(retrieveSavedColors());
  }, [dispatch]);

  return (
    <div className="container mt-3 d-flex flex-column align-items-center">
      <h2>Saved colors</h2>{" "}
      {savedColors.length === 0 ? (
        <p>No saved colors yet.</p>
      ) : (
        <ul className="list-group">
          {savedColors.map((color: Color, index: number) => (
            <li
              key={index}
              className="list-group-item p-2 my-1 border-top d-flex justify-content-between"
              style={{ minWidth: "500px" }}
            >
              <div className="d-flex align-items-center">
                <div
                  className="rounded mr-3"
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: color.hex,
                  }}
                ></div>
              </div>
              <span className="mr-2 mt-2">
                rgb({color.rgb.red}, {color.rgb.green}, {color.rgb.blue})
              </span>
              <span className="mt-2">{color.hex}</span>
              <button
                className="btn btn-primary"
                onClick={() => onColorSelect(color)}
              >
                Display Color
              </button>
              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteSavedColors(index))}
              >
                Delete{" "}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedColors;
