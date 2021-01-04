import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Brush,
  ReferenceLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const chartData = [
  { province: "Alabama", deaths: 300, confirmed: 456 },
  { province: "KAnas", deaths: 400, confirmed: 1456 },
  { province: "Utah", deaths: 100, confirmed: 4056 },
];

const apiData = [
  {
    city: "Clay",
    province: "Alabama",
    country: "US",
    lastUpdate: "2021-01-04T05:22:02+00:00",
    keyId: "Clay, Alabama, US",
    confirmed: 1158,
    deaths: 34,
    recovered: null,
  },
  {
    city: "Cleburne",
    province: "Alabama",
    country: "US",
    lastUpdate: "2021-01-04T05:22:02+00:00",
    keyId: "Cleburne, Alabama, US",
    confirmed: 1048,
    deaths: 16,
    recovered: null,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/mc8r7e6p/";

  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="province" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
        <ReferenceLine y={0} stroke="#000" />
        <Brush dataKey="province" height={30} stroke="#8884d8" />
        <Bar dataKey="deaths" fill="#8884d8" />
        <Bar dataKey="confirmed" fill="#82ca9d" />
      </BarChart>
    );
  }
}
