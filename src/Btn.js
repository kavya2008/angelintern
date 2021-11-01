import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Cardcmp from "./Card";
const gitHubUrl = "https://reqres.in/api/users?page=1";

function Btn(){
        const [userData, setUserData] = useState();
        async function getdata(){
            const response =await axios.get(gitHubUrl);
            console.log('pressed');
      setUserData(response.data);
      console.log(response.data);
        }
    
        return (
            <div className="user-container">
                <button onClick={getdata} className="bn">Get User Data</button>
      {userData?.data && userData?.data?.length > 0  ? (
                userData?.data.map((data, index) => {
                  console.log(data?.first_name);
                  
                  return(
                    <>
                    <img src={data?.avatar} height="200px" width="200px"></img>
                    <Cardcmp key={data?.id}
                    
                    Title={data?.first_name} text={data?.email}>

                    </Cardcmp>
                  </>
                  )
                })):null}
        
       
      </div>
        )
    }
    export default Btn;