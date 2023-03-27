import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from 'recharts';
import './charts.css';
import PropTypes from 'prop-types';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';


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

const BarData = () => {
    const colors = scaleOrdinal(schemeCategory10).range();
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
    ];
    return (
        < div className = "records-chart" >
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
                <Bar dataKey="female" fill="#8884d8"  label={{ position: 'top' }}>
                    {data2.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill="#8884d8" />
                    ))}
                </Bar>
            </BarChart>
        </div >
    );
}

export default BarData;