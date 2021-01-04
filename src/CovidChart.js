import axios from "axios";
import { useEffect, useState } from "react";
import { normalizeData } from "./format";
import { US_DATA } from "./hardCodedData";
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

// just a object
const options = {
  method: "GET",
  url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
  params: { country: "US" },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
  },
};

const CovidChart = () => {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.data.covid19Stats);
        let formatedData = normalizeData(response.data.data.covid19Stats);
        let sortedData = formatedData.sort((a, b) => b.confirmed - a.confirmed);
        setChartData(sortedData);
      })
      .catch(function (error) {
        console.error(error);
        // IF ERROR RENDER SOME HARDCODED DATA
        let formatedData = normalizeData(US_DATA);
        setChartData(formatedData);
      });
  }, []);

  return (
    <div>
      <h1>Stats</h1>
      <BarChart
        width={1200}
        height={600}
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
    </div>
  );
};

export default CovidChart;
