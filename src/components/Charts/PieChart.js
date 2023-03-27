import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip} from 'recharts';
import './charts.css';

const PieData = () => {
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
    );
};

export default PieData;