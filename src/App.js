import React from "react";
import Navbar from './Components/Navbar/Navbar'
import RestaurantCard from "./Components/RestaurantCard/RestaurantCard";
import SearchFilter from "./Components/SearchFilter/SearchFilter";




 


export default function App() {
  return (
    <>
      <Navbar/>
      <SearchFilter/>
      <RestaurantCard/>
     </>
  )
}



   //  const root=ReactDOM.createRoot(document.getElementById("root"));
   //  root.render(<App />);