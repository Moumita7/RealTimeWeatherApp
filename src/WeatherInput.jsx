import { useContext } from "react";
import { MyContext } from "./App";
import { Link, useNavigate } from "react-router-dom";
import "./style/weatherInput.css";

const WeatherInput = () => {
  const { setSearchVal } = useContext(MyContext);
  const { getLocation, setTrueVal } = useContext(MyContext);

  const navigate = useNavigate();
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      // alert("ok")
      navigate("/map");
    }
  }

  let getLocationn = () => {
    getLocation();
    setTrueVal(true);
  };

  let handleBtn = () => {
    navigate("/map");
  };
  return (
    <div id="mainInput">
      <div>
        <h2 style={{ color: "white" }}>Weather App</h2>
        <div>
          <input
            className="inputBoxWaterInput"
            type="text"
            placeholder="Enter City Name"
            // value={city}
            onChange={(e) => setSearchVal(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
          />
        </div>

        <button onClick={handleBtn} className="weaterBtn">
          search
        </button>
        <div className="getDriveloc">
          <div className="div1"></div>

          <p style={{ color: "white" }}>or</p>
          <div className="div2"></div>
        </div>
        <div>
          <Link to="/map">
            <button onClick={getLocationn} className="getDriveBtn">
              Get drive Location
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeatherInput;
