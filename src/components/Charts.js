import React from 'react'
import Chart from "./Chart";
import Alert from "react-bootstrap/Alert";
import ListGroupItem from "react-bootstrap/cjs/ListGroupItem";
import ListGroup from "react-bootstrap/cjs/ListGroup";

const Charts = ({confirmed,deaths,recovered}) => (
    <div>
        <Alert variant="danger"><h2>{confirmed[2]}</h2></Alert>
        <ListGroup>
            <ListGroupItem>感染者/confirmed
                <Chart content={confirmed[0]} max={confirmed[1]} fill={"#d1d884"}/>
            </ListGroupItem>
            <ListGroupItem>死亡者/deaths
                <Chart content={deaths[0]} max={deaths[1]} fill={"#d88484"}/>
            </ListGroupItem>
            <ListGroupItem>回復者/recovered
                < Chart content={recovered[0]} max={recovered[1]} fill={"#84d7d8"}/>
            </ListGroupItem>
        </ListGroup>
        <Alert variant="danger"><a href={"https://data.humdata.org/dataset/novel-coronavirus-2019-ncov-cases"}>出典:The Humanitarian Data Exchange</a></Alert>
    </div>
)


export default Charts