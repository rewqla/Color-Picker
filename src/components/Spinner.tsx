import { BallTriangle } from "react-loader-spinner";

const Spinner = () => {
  const style: React.CSSProperties = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div style={style}>
      <BallTriangle height={100} width={100} radius={5} color="#4fa94d" />
    </div>
  );
};

export default Spinner;
