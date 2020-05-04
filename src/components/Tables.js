import Table from "react-bootstrap/cjs/Table";
import React from "react";


// 小数第１位までの%に変換
function roundDown(x){
    const roundedUp = x*1000|0
    return roundedUp/10
}

export const Tables = ({confirmed,deaths,recovered})=>(
    <Table striped borderless hover>
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
            <td>{deaths.number}人({roundDown(deaths.number/confirmed.number)}%)</td>
            <td>{recovered.number}人({roundDown(recovered.number/confirmed.number)}%)</td>

        </tr>
        </tbody>
    </Table>
)

export default Tables