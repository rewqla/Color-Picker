const SavedColors = () => {
  const savedColors = [
    { rgb: "rgb(255, 0, 0)", hex: "#FF0000" },
    { rgb: "rgb(0, 255, 0)", hex: "#00FF00" },
    { rgb: "rgb(0, 0, 255)", hex: "#0000FF" },
  ];

  return (
    <div className="container mt-3 d-flex flex-column align-items-center">
      <h2>Saved colors</h2>
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
            <span className="mr-2">{color.rgb}</span>
            <span>{color.hex}</span>
            <button className="btn btn-primary">Display Color</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedColors;
