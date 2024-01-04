import { useEffect, useState } from "react";
import Color from "../interfaces/Color";
import localStorageService from "../services/localStorageService";

const SavedColors = () => {
  const [savedColors, setSavedColors] = useState<Color[]>([]);

  useEffect(() => {
    const colors = localStorageService.getColors();
    console.log(colors);
    if (colors) {
      setSavedColors(colors);
    }
  }, []);

  return (
    <div className="container mt-3 d-flex flex-column align-items-center">
      <h2>Saved colors</h2>{" "}
      {savedColors.length === 0 ? (
        <p>No saved colors yet.</p>
      ) : (
        <ul className="list-group">
          {savedColors.map((color, index) => (
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
              <button className="btn btn-primary">Display Color</button>
              <button
                className="btn btn-danger"
                onClick={() => localStorageService.deleteColor(index)}
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
