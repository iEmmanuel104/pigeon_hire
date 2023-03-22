import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from 'recharts';
import './Dashboard.css';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import PropTypes from 'prop-types';
import AnimatedNumber from 'react-animated-number';


const getPath = (x, y, width, height) => `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
          Z`;

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

TriangleBar.propTypes = {
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
};

// const renderTooltip = (props) => {
//     const { active, payload } = props;
//     if (active) {
//         return (
//             <div className="custom-tooltip">
//                 <p className="label">{`${payload.name} : ${payload.value}`}</p>
//             </div>
//         );
//     }
//     return null;
// };

const Leaderboard = () => {

    const colors = scaleOrdinal(schemeCategory10).range();
    const data = [
        { Missinginfo: "Dec", users: 50 },
        { Missinginfo: "Jan", users: 20 },
        { Missinginfo: "Feb", users: 44, },
        { Missinginfo: "March", users: 36 },
    ];
    const data2 = [
        {
            name: 'Tool A',
            uv: 40,
            female: 2400,
        },
        {
            name: 'Tool B',
            uv: 30,
            female: 1398,
        },
        {
            name: 'Tool C',
            uv: 20,
            female: 9800,
        },
        {
            name: 'Tool D',
            uv: 27.80,
            female: 3908,
        },
        {
            name: 'Tool E',
            uv: 18.90,
            female: 4800,
        },
        {
            name: 'Tool F',
            uv: 23.90,
            female: 3800,
        },
        {
            name: 'Tool G',
            uv: 34.90,
            female: 4300,
        },
    ]

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const data3 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
        const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                {`${data3[index].name} (${(percent * 100).toFixed(0)}%)`}
            </text>
        );
    };

    const renderTooltip = (entry) => {
        return (
            <div>
                <p>{`${entry.name}: ${entry.value}`}</p>
            </div>
        );
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1 className="records">Pigeon Leaderboard Stats</h1>
            <div className="records-container">
                <div className="records-chart">
                    <h2 className="records-title">User Sign up and activity index</h2>
                    <AnimatedNumber
                        component="text"
                        value={9650}
                        duration={1000}
                        formatValue={(n) => n.toFixed(0)}
                        className="records-number"
                    />
                </div>
                <br />
                <div className="records-chart">
                    <h2 className="records-title">Monthly User Sign Up</h2>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 80,
                            bottom: 5,
                        }}
                        barSize={20}
                    >
                        <XAxis
                            dataKey="Missinginfo"
                            scale="point"
                            padding={{ left: 10, right: 10 }}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
                    </BarChart>
                </div>
                <div className="records-chart">
                    <h2 className="records-title">User Sign UP based on Interest</h2>

                    <PieChart width={400} height={400}>
                        <Pie
                            data={data3}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={200}
                            fill="#8884d8"
                            dataKey="value"
                            tooltip={renderTooltip}
                        >
                            {data3.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>
                <div className="records-chart">
                    <h2 className="records-title">Sign Up based on user activity</h2>
                    <BarChart
                        width={500}
                        height={300}
                        data={data2}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar dataKey="female" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {data2.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;
