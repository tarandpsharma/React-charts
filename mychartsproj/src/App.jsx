import * as React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import dataf from "../public/data.json";


const App = () => {
  const data = dataf;
  {console.log(data, "rererrerrrerr")}

  return (
    <LineChart width={450} height={300} data={data}>
      <Line type="monotone" dataKey="Age" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="Name" />
      <YAxis />
      <Tooltip
        formatter={(value, name) => (name === 'Age' ? `${value} years` : value)}
      />
    </LineChart>
  );
};

export default App;
