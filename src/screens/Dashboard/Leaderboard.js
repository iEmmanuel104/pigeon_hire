import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from 'recharts';
import './Dashboard.css';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import PropTypes from 'prop-types';
import AnimatedNumber from 'react-animated-number';
import PieData from '../../components/Charts/PieChart';
import BarData from '../../components/Charts/BarChart';
import LineData from '../../components/Charts/LineChart';

const Leaderboard = () => {
    const data = [
        { Missinginfo: "Dec", users: 50 },
        { Missinginfo: "Jan", users: 20 },
        { Missinginfo: "Feb", users: 44, },
        { Missinginfo: "March", users: 36 },
    ];
    return (
        <div style={{ textAlign: "center" }}>
            <h1 className="records">Pigeon Leaderboard Stats</h1>
            <div className="records-container">
                <div className="records-chart">
                    <h2 className="records-title">Total Successful Transactions</h2>
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
                <LineData />
                <PieData />
                <BarData />

            </div>
        </div>
    );
};

export default Leaderboard;
