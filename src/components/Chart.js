import React from 'react'
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis,ResponsiveContainer,
    LineChart, Line, ComposedChart} from "recharts";

// logならログスケール、そうでなければlinear scaleのグラフを返す

const Chart = ({ content,max,fill,log,difference }) => (
    <div>
        {!log ?
            <ResponsiveContainer width="90%" aspect={5.0 / 3.0}>
                {!difference ?
                    <BarChart
                        data={content}
                        margin={{
                            top: 5, right: 30, left: 30, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                            < YAxis type="number" domain={[0, max]}/>
                        <Tooltip/>
                        <Legend/>
                            <Bar dataKey="number" fill={fill}  name={"累積人数"}/>
                    </BarChart>:
                    <ComposedChart

                        data={content}
                        margin={{
                            top: 5, right: 30, left: 30, bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name"/>
                            < YAxis type="number"/> :
                        <Tooltip/>
                        <Legend/>
                            <Bar dataKey="difference" fill={fill}   name={"新規人数"}/>
                        <Line dataKey="movingAverageDiff" stroke={"#ff0008"} dot={false} strokeWidth={1} name={"7日移動平均"}/>
                        <Line dataKey="movingAverageDiffLong" stroke={"#0020ff"} dot={false} strokeWidth={1} name={"28日移動平均"}/>
                    </ComposedChart>
                }
            </ResponsiveContainer> :
            <ResponsiveContainer width="90%" aspect={5.0 / 3.0}>
                <LineChart
                    data={content}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis scale={'log'} domain={[1, max]}/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="number" stroke={fill} dot={false} strokeWidth={4}　name={"累積人数"}/>
                </LineChart>
            </ResponsiveContainer>
        }
    </div>
)


export default Chart