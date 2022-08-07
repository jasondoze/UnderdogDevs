const nestObj = [
  {
    Title: 'The Mummy: Tomb of the Dragon Emperor',
    Distributor: 'Universal Pictures',
    'Release Date': '2008',
    'US Sales': '102491776',
    'World Sales': '403449830',
    Runtime: '1 hr 52 min',
    Rating: 'PG-13',
  },
  {
    Title: 'The Cat in the Hat',
    Distributor: 'Universal Pictures',
    'Release Date': '2003',
    'US Sales': '101149285',
    'World Sales': '133960541',
    Runtime: '1 hr 22 min',
    Rating: 'PG',
  },
];

// access the US Sales key in the nestObj array
function usSales(nestObj) {
  let usSales = [];
  for (let rows of nestObj) {
    usSales.push(rows['US Sales']);
  }
  return usSales;
}
console.log(usSales(nestObj));