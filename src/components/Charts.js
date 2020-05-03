import React from 'react'
import Chart from "./Chart";
import Alert from "react-bootstrap/Alert";
import ListGroupItem from "react-bootstrap/cjs/ListGroupItem";
import ListGroup from "react-bootstrap/cjs/ListGroup";
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import Tables from './Tables.js'

function latest(array){
    if (array) {
        const length = array.length
        console.log(array[length - 1])
        return array[length - 1]
    }else{
        return {name:"",number:0}
    }
}


const Charts = ({confirmed,deaths,recovered,log,onClick}) => (
    <div>
        <Alert variant="danger"><h2>{confirmed[2]}</h2></Alert>
        <BootstrapSwitchButton
            checked={log}
            onlabel='LOGARITHM'
            offlabel='LINEAR'
            onChange={onClick}
            width = {'150'}
            onstyle="info"
            offstyle="danger"
        />
        <Tables confirmed={latest(confirmed[0])}
                deaths={latest(deaths[0])}
                recovered={latest(recovered[0])}
        />
        <ListGroup>
            <ListGroupItem>感染者/confirmed
                <Chart content={confirmed[0]} max={confirmed[1]} fill={"#d1d884"} log={log}/>
            </ListGroupItem>
            <ListGroupItem>死亡者/deaths
                <Chart content={deaths[0]} max={deaths[1]} fill={"#d88484"} log={log}/>
            </ListGroupItem>
            <ListGroupItem>回復者/recovered
                < Chart content={recovered[0]} max={recovered[1]} fill={"#84d7d8"} log={log}/>
            </ListGroupItem>
        </ListGroup>
        <Alert variant="danger"><a href={"https://data.humdata.org/dataset/novel-coronavirus-2019-ncov-cases"}>出典:The Humanitarian Data Exchange</a></Alert>
    </div>
)


export default Charts