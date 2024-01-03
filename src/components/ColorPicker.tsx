import { useEffect, useState } from "react";

const ColorPicker = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [hex, setHex] = useState("");

  const convertToHex = (color: number) => {
    const hex = color.toString(16);
    console.log(hex);
    return hex.length === 1 ? "0" + hex : hex;
  };

  useEffect(() => {
    setHex(`#${convertToHex(red)}${convertToHex(green)}${convertToHex(blue)}`);
  }, [red, green, blue]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Create Your Individual Color</h1>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-8 text-center">
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

          <div className="form-group mb-4">
            <label htmlFor="redRange" style={{ color: "red" }}>
              Red
            </label>
            <input
              type="range"
              className="form-range"
              style={{ width: "100%" }}
              id="redRange"
              min="0"
              max="255"
              value={red}
              onChange={(e) => {
                setRed(Number(e.target.value));
              }}
            />
            <span className="d-block mt-2">{red}</span>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="greenRange" style={{ color: "green" }}>
              Green
            </label>
            <input
              type="range"
              className="form-range"
              style={{ width: "100%" }}
              id="greenRange"
              min="0"
              max="255"
              value={green}
              onChange={(e) => {
                setGreen(Number(e.target.value));
              }}
            />
            <span className="d-block mt-2">{green}</span>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="blueRange" style={{ color: "blue" }}>
              Blue
            </label>
            <input
              type="range"
              className="form-range"
              style={{ width: "100%" }}
              id="blueRange"
              min="0"
              max="255"
              value={blue}
              onChange={(e) => {
                setBlue(Number(e.target.value));
              }}
            />
            <span className="d-block mt-2">{blue}</span>
          </div>
        </div>

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
              <button type="button" className="btn btn-outline-secondary">
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
      </div>
    </div>
  );
};

export default ColorPicker;
