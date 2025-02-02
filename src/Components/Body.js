import { Link } from "react-router-dom";

const Body = () => {
  return (
    <div className="container">
      <div 
        style={{
          marginTop: "100px",
          width: "300px",
          height: "auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          textAlign: "center",
        }}
        className="card container"
      >
        <Link to={"/login"}>
          <button
            style={{
              marginBottom: "15px",
              backgroundColor: "rgb(173, 216, 230)",
              padding: "12px",
              width: "200px",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          >
            Login
          </button>
        </Link>
        <br />
        <Link to={"/register"}>
          <button
            style={{
              backgroundColor: "rgb(173, 216, 230)",
              padding: "12px",
              width: "200px",
              borderRadius: "5px",
              fontSize: "16px",
            }}
          >
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Body;
