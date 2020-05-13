import React from 'react'
import { CartesianGrid, Legend, Tooltip, XAxis, YAxis,ResponsiveContainer,
    LineChart, Line} from "recharts";

// logならログスケール、そうでなければlinear scaleのグラフを返す

const ChartLog = ({ content,max,fill}) => (
    <div>
            <ResponsiveContainer width="100%" aspect={5.0 / 3.0}>
                <LineChart
                    data={content}
                    margin={{
                        top: 5, right: 5, left: 20, bottom: 5,
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
    </div>
)


export default ChartLog