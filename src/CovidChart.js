import axios from "axios";
import { useEffect, useState } from "react";
import { US_DATA } from "./hardCodedData";

// just a object
const options = {
  method: "GET",
  url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
  params: { country: "US" },
  headers: {
    // "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    "x-rapidapi-key": "asdfasd",
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
        setChartData(response.data.data.covid19Stats);
      })
      .catch(function (error) {
        console.error(error);
        // IF ERROR RENDER SOME HARDCODED DATA
        setChartData(US_DATA);
      });
  }, []);

  return (
    <div>
      <h1>Stats</h1>
      <p>{chartData.length}</p>
    </div>
  );
};

export default CovidChart;
