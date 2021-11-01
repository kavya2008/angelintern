import React from 'react';
import {Card}from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';


const Cardcmp=(props)=>{
    
    return(
        <>
        <Card shadow={2}
        style={{ borderWidth: 1, borderColor: "purple" ,width:"200px", margin:"10px"}}
       >
  <Card.Body>
  <Card.Title>
      {props.Title}
        </Card.Title>
    <Card.Text>
        <span><b>Email:</b></span>
      {props.text}
    </Card.Text>
   
  </Card.Body>
</Card>
        </>
    )
}
export default Cardcmp;