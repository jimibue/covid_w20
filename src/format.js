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
    confirmed: 10,
    deaths: 16,
    recovered: null,
  },
  {
    city: "Cleburne",
    province: "Utah",
    country: "US",
    lastUpdate: "2021-01-04T05:22:02+00:00",
    keyId: "Cleburne, Alabama, US",
    confirmed: 10,
    deaths: 1,
    recovered: null,
  },
  {
    city: "Cleburne",
    province: "Utah",
    country: "US",
    lastUpdate: "2021-01-04T05:22:02+00:00",
    keyId: "Cleburne, Alabama, US",
    confirmed: 12,
    deaths: 3,
    recovered: null,
  },
  {
    city: "Cleburne",
    province: "Alaska",
    country: "US",
    lastUpdate: "2021-01-04T05:22:02+00:00",
    keyId: "Cleburne, Alabama, US",
    confirmed: 12,
    deaths: 34,
    recovered: null,
  },
];

// const normalizeData = (dataFromAPI) => {
//   let uniqueProvinces = [...new Set(dataFromAPI.map((d) => d.province))];
//   let provinceDataCollector = [];

//   uniqueProvinces.forEach((province) => {
//     let provinceObj = { province, deaths: 0, confirmed: 0 };

//     dataFromAPI.forEach((data) => {
//       if (data.province == province) {
//         provinceObj.deaths += data.deaths;
//         provinceObj.confirmed += data.confirmed;
//       }
//     });

//     provinceDataCollector.push(provinceObj);
//   });

//   return provinceDataCollector;
// };

export const normalizeData = (dataFromAPI) => {
  let provinceDataObj = dataFromAPI.reduce((accum, data) => {
    console.log(accum);
    const { province, deaths, confirmed } = data;
    if (accum[province] == null) {
      accum[province] = { province, deaths, confirmed };
    } else {
      accum[province].deaths += deaths;
      accum[province].confirmed += confirmed;
    }
    return accum;
  }, {});

  let provinceDataArray = [];

  for (const key in provinceDataObj) {
    provinceDataArray.push(provinceDataObj[key]);
  }
  return provinceDataArray;
};
