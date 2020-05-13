import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import Container from "react-bootstrap/Container";
import React from "react";


const Toggles = ({log,difference,perPop,onClick,onClick2,onClick3}) => (
<Container>
    <Row>
        <Col>{
            (!difference && !perPop) &&
            <BootstrapSwitchButton
                checked={log}
                onlabel='LOG'
                offlabel='LINEAR'
                onChange={onClick}
                width={'100'}
                onstyle="warning"
                offstyle="danger"
                disabled={difference}
            />
        }
        </Col>
        <Col>
            {!log &&
            <BootstrapSwitchButton
                checked={difference}
                onlabel='DIFF'
                offlabel='CUMU'
                onChange={onClick2}
                width={'100'}
                onstyle="info"
                offstyle="warning"
            />
            }
        </Col>
        <Col>
            <BootstrapSwitchButton
                checked={perPop}
                onlabel='per10000'
                offlabel='perAll'
                onChange={onClick3}
                width={'100'}
                onstyle="danger"
                offstyle="info"
            />
        </Col>
    </Row>
</Container>
)

export default Toggles