import React from 'react';
import datat from '../public/data.json';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const Chartsdata = () => {
    const data =datat;
    {console.log(data, "dfsfsfsf")}
  return (
    <BarChart
      width={450}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey= "Total Marks" fill="#8884d8" />
      <Bar dataKey="Obtained Marks" fill="#82ca9d" />
    </BarChart>

  )
}

export default Chartsdata;