const ColorPicker = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Choose Your Individual Color</h1>
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-8 text-center">
          <div className="mb-4">
            <div
              className="rounded border"
              style={{
                width: "100%",
                height: "150px",
                backgroundColor: "rgb(123, 123, 123)",
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
              id="redRange"
              min="0"
              max="255"
              style={{ width: "100%" }}
            />
            <span className="d-block mt-2">123</span>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="greenRange" style={{ color: "green" }}>
              Green
            </label>
            <input
              type="range"
              className="form-range"
              id="greenRange"
              min="0"
              max="255"
              style={{ width: "100%" }}
            />
            <span className="d-block mt-2">123</span>
          </div>

          <div className="form-group mb-4">
            <label htmlFor="blueRange" style={{ color: "blue" }}>
              Blue
            </label>
            <input
              type="range"
              className="form-range"
              id="blueRange"
              min="0"
              max="255"
              style={{ width: "100%" }}
            />
            <span className="d-block mt-2">123</span>
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
                  value="#sssss"
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
