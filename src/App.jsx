import "./App.css";
import { createContext, useEffect, useState } from "react";
import AllRoute from "./routes/AllRoute";

export const MyContext = createContext("");

function App() {
  let [city, setCity] = useState(null);
  const [searchVal, setSearchVal] = useState("");
  // console.log(searchVal)
  console.log("cityy", city);

  //
  const [lat, setLate] = useState();
  const [long, setLong] = useState();
  const [currLoc, setCurrLoc] = useState();
  const [setMsg] = useState("");
  let [trueVal, setTrueVal] = useState(false);
  //current location

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else {
      setMsg("Geolocation is not supported by this browser.");
    }
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=d519434cae900ae9d596764e4a09d3ce`
    );
    let jsonn = await data.json();
    // console.log("js",jsonn)

    setCurrLoc(jsonn);
  };

  function showPosition(position) {
    setLate(position.coords.latitude);
    setLong(position.coords.longitude);
  }

  //map input

  useEffect(() => {
    setCurrLoc(null);
    let timmer = setTimeout(() => {
      fetchData();
    }, 200);
    return () => clearTimeout(timmer);
  }, [searchVal]);

  const fetchData = async () => {
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&appid=d519434cae900ae9d596764e4a09d3ce`
    );
    let json = await data.json();
    // console.log(json)
    setCity(json);
  };

  return (
    <>
      <MyContext.Provider
        value={{
          city,
          setCity,
          searchVal,
          setSearchVal,
          getLocation,
          currLoc,
          trueVal,
          setTrueVal,
        }}
      >
        <div className="mainapp">
          <AllRoute />
        </div>
      </MyContext.Provider>
    </>
  );
}

export default App;
