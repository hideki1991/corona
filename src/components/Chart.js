import React from 'react'
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis,ResponsiveContainer,
     Line, ComposedChart} from "recharts";

// logならログスケール、そうでなければlinear scaleのグラフを返す

const Chart = ({ content,max,fill,difference,perPop }) => (
    <div>
            <ResponsiveContainer width="100%" aspect={5.0 / 3.0}>
                {!difference ?
                    <BarChart
                        data={content}
                        margin={{
                            top: 5, right: 20, left: 20, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                            < YAxis type="number" domain={[0, max]}/>
                        <Tooltip/>
                        <Legend/>
                            <Bar dataKey="number" fill={fill}  name={!perPop?"累積人数":"累積人数(/１万人)"}/>
                    </BarChart>:
                    <ComposedChart

                        data={content}
                        margin={{
                            top: 5, right: 5, left: 5, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                            < YAxis type="number"/> :
                        <Tooltip/>
                        <Legend/>
                            <Bar dataKey="difference" fill={fill}   name={!perPop ?"新規人数":"新規人数(/１万人)"}/>
                        <Line dataKey="movingAverageDiff" stroke={"#ff0008"} dot={false} strokeWidth={1} name={"7日移動平均"}/>
                        <Line dataKey="movingAverageDiffLong" stroke={"#0020ff"} dot={false} strokeWidth={1} name={"28日移動平均"}/>
                    </ComposedChart>
                }
            </ResponsiveContainer>
    </div>
)


export default Chart