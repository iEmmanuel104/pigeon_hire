import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './linechart.css';

const LineData = () => {
    const data = [
        { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
        { name: 'Aug', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Sep', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Oct', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Nov', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Dec', uv: 1890, pv: 4800, amt: 2181 },
    ];

    return (
        <div className="records-chart">
            <h2 className="records-title">Monthly Visitors</h2>
            <LineChart width={500} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default LineData;
