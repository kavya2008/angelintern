import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./component/Navbar";
import Btn from "./Btn";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Btn/>
    </div>
  )
 };
export default App;