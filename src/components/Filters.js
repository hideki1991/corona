import React from 'react'
import FilterWithID from '../containers/FilterWithID'
import ListGroup from "react-bootstrap/cjs/ListGroup";
import countries from "../data/countries";





const Filters = () => (
    <div>
        <ListGroup>
        {countries.map((value, index) => {
            return <FilterWithID countryID={index+1}>{value}</FilterWithID>
        })}
        </ListGroup>
    </div>
)

export default Filters