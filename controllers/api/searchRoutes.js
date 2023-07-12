const router = require('express').Router();
const fetch = require('node-fetch');

router.get('/:city', async (req, res) => {
  const cityName = req.params.city;
  const url = 'https://cities-cost-of-living1.p.rapidapi.com/get_city_by_name';
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'cities-cost-of-living1.p.rapidapi.com',
    },
    body: new URLSearchParams({
      name: cityName,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    //collect user financial information
    const userIncome = req.query.income; // Extract income from query parameter or request body

    // calculations or comparisons with the cost of living data and user's income


    // Send the calculated data or relevant response back to the client
    res.json({ city: cityName, costOfLivingData: result, userIncome });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
