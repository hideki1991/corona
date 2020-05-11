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


const Charts = ({confirmed,deaths,recovered,log,difference,onClick,onClick2}) => (
    <div>
        <Alert variant="danger"><h2>{confirmed[2]}</h2></Alert>
            <BootstrapSwitchButton
                checked={log}
                onlabel='LOG'
                offlabel='LINEAR'
                onChange={onClick}
                width={'150'}
                onstyle="info"
                offstyle="danger"
                disabled={difference}
            />
        {!log &&
            <BootstrapSwitchButton
                checked={difference}
                onlabel='DIFF'
                offlabel='SUM'
                onChange={onClick2}
                width={'150'}
                onstyle="info"
                offstyle="warning"
            />
        }
        <Tables confirmed={latest(confirmed[0])}
                deaths={latest(deaths[0])}
                recovered={latest(recovered[0])}
        />
        <ListGroup>
            <ListGroupItem>感染者数/confirmed
                <Chart content={confirmed[0]} max={confirmed[1]} fill={"#d1d884"} log={log} difference={difference}/>
            </ListGroupItem>
            <ListGroupItem>死亡者数/deaths
                <Chart content={deaths[0]} max={deaths[1]} fill={"#d88484"} log={log} difference={difference}/>
            </ListGroupItem>
            <ListGroupItem>回復者数/recovered
                < Chart content={recovered[0]} max={recovered[1]} fill={"#84d7d8"} log={log} difference={difference}/>
            </ListGroupItem>
        </ListGroup>
        <Alert variant="danger">
            出典：<a href={"https://data.humdata.org/dataset/novel-coronavirus-2019-ncov-cases"}>The Humanitarian Data Exchange</a><br></br>
            注意：差分は、元データの基準日の累積値から前日の値を減算して求めたものです
        </Alert>

    </div>
)


export default Charts