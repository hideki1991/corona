import React from 'react'
import Alert from "react-bootstrap/Alert";
import TogglesWithData from "../containers/TogglesWithData";


const Menu =({country,date})=> (
    <div>
        <Alert variant="info">
            <h2>{country}</h2>
            <h4>{date}</h4>
        </Alert>
        <TogglesWithData/>
    </div>
)

export default Menu
