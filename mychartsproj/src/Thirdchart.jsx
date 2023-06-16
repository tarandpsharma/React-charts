import React from "react";
import datadd from '../public/data.json'
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter
} from "recharts";

  
export default function Thirdchart() {

const data = datadd

  return (
    <ComposedChart
      width={450}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Area type="monotone" dataKey="Obtained Marks" fill="#8884d8" stroke="#8884d8" />
      <Bar dataKey="Total Marks" barSize={20} fill="#413ea0" />
      <Line type="monotone" dataKey="Obtained Marks" stroke="#ff7300" />
    </ComposedChart>
  );
}
