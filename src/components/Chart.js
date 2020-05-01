import React from 'react'
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis,ResponsiveContainer} from "recharts";

const Chart = ({ content,max,fill }) => (
    <ResponsiveContainer width="80%" aspect={5.0/3.0} >
    <BarChart

        data={content}
        margin={{
            top: 5, right: 30, left: 30, bottom: 5,
        }}
    >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, max]}/>
        <Tooltip />
        <Legend />
        <Bar dataKey="number" fill={fill} />
    </BarChart>
    </ResponsiveContainer>
)


export default Chart