import axios from "axios";
import { useEffect } from "react";

// just a object
const options = {
  method: "GET",
  url: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats",
  params: { country: "Canada" },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
  },
};

const CovidChart = () => {
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.data.covid19Stats);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Stats</h1>
    </div>
  );
};

export default CovidChart;
