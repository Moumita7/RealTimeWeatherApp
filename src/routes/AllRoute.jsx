import { Route, Routes } from "react-router-dom"
import WeatherInput from "../WeatherInput"
import WeatherMap from "../WeatherMap"



const AllRoute = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<WeatherInput />}/>
        <Route path="/map" element={<WeatherMap/>} />   
      </Routes>
    </div>
  )
}

export default AllRoute