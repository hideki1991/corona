import Table from "react-bootstrap/cjs/Table";
import React from "react";



export const Tables = ({confirmed,deaths,recovered})=>(
    <Table striped bordered hover>
        <thead>
        <tr>
            <th>基準日</th>
            <th>感染者数</th>
            <th>死亡者数(死亡率)</th>
            <th>回復者数(回復率)</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>{confirmed.name}</td>
            <td>{confirmed.number}人</td>
            <td>{deaths.number}人({(deaths.number/confirmed.number*100)|0}%)</td>
            <td>{recovered.number}人({(recovered.number/confirmed.number*100)|0}%)</td>

        </tr>
        </tbody>
    </Table>
)

export default Tables