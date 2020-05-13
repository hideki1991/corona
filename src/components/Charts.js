import React from 'react'
import Chart from "./Chart";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ChartLog from "./ChartLog";

function latest(array){
    if (array) {
        const length = array.length
        console.log(array[length - 1])
        return array[length - 1]
    }else{
        return {name:"",number:0}
    }
}


const Charts = ({confirmed,deaths,recovered,log,difference, perPop}) => (
    <div>
        <Container fluid>

            {!log ?
                <Row>
                    <Col lg={4}>
                        <h5>感染者数:{!difference? latest(confirmed[0]).number:latest(confirmed[0]).difference}人</h5>
                        <Chart content={confirmed[0]} max={confirmed[1]} fill={"#d1d884"}
                               difference={difference} perPop={perPop}/>
                    </Col>
                    <Col lg={4}>
                        <h5>死亡者数:{!difference? latest(deaths[0]).number:latest(deaths[0]).difference}人</h5>
                        <Chart content={deaths[0]} max={deaths[1]} fill={"#d88484"}  difference={difference} perPop={perPop}/>
                    </Col>
                    <Col lg={4}>
                        <h5>回復者数:{!difference? latest(recovered[0]).number:latest(recovered[0]).difference}人</h5>
                        < Chart content={recovered[0]} max={recovered[1]} fill={"#84d7d8"}
                                difference={difference} perPop={perPop}/>
                    </Col>
                </Row> :

                <Row>
                    <Col lg={4}>
                        <h5>感染者数:{latest(confirmed[0]).number}人</h5>
                        <ChartLog content={confirmed[0]} max={confirmed[1]} fill={"#d1d884"}/>
                    </Col>
                    <Col lg={4}>
                        <h5>死亡者数:{latest(deaths[0]).number}人</h5>
                        <ChartLog content={deaths[0]} max={deaths[1]} fill={"#d88484"}/>
                    </Col>
                    <Col lg={4}>
                        <h5>回復者数:{latest(recovered[0]).number}人</h5>
                        < ChartLog content={recovered[0]} max={recovered[1]} fill={"#84d7d8"} />
                    </Col>
                </Row>
            }
        </Container>
    </div>
)


export default Charts