import React from 'react'
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis,ResponsiveContainer,
    LineChart, Line} from "recharts";

// logならログスケール、そうでなければlinear scaleのグラフを返す

const Chart = ({ content,max,fill,log,difference }) => (
    <div>
        {!log ?
            <ResponsiveContainer width="80%" aspect={5.0 / 3.0}>
                <BarChart

                    data={content}
                    margin={{
                        top: 5, right: 30, left: 30, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    {difference ?
                    < YAxis type="number"/>:
                        < YAxis type="number" domain={[0, max]}/>
                    }
                    <Tooltip/>
                    <Legend/>
                    {difference ?
                    <Bar dataKey="difference" fill={fill}/>:
                        <Bar dataKey="number" fill={fill}/>

                    }
                </BarChart>
            </ResponsiveContainer> :
            <ResponsiveContainer width="80%" aspect={5.0 / 3.0}>
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
                    <Line type="monotone" dataKey="number" stroke={fill} dot={false} strokeWidth={4}/>
                </LineChart>
            </ResponsiveContainer>
        }
    </div>
)


export default Chart