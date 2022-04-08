import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            name: 'Page A',
            price: 4000,
            sales: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            price: 3000,
            sales: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            price: 2000,
            sales: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            price: 2780,
            sales: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            price: 1890,
            sales: 4800,
            amt: 2181,
        },

    ];
    return (
        <LineChart width={500} height={300} data={data}>
            <Line datakey={"price"}></Line>
            <Line datakey={"sales"}></Line>
            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>
        </LineChart>
    )

};



export default Dashboard;