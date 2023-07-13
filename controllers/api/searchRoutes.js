const { Router } = require('express');


const router = Router();

router.get('/', async (req, res) => {
  const url = 'https://cities-cost-of-living1.p.rapidapi.com/get_cities_list';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b7f78328f1msh650327bb4a94881p13a6d2jsn2e27c4098761',
      'X-RapidAPI-Host': 'cities-cost-of-living1.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }

  res.render('homepage', {
    // Pass any data needed for rendering the homepage
  });
});

router.post('/', async (req, res) => {
  const { cities, currencies } = req.body;

  const url = 'https://cities-cost-of-living1.p.rapidapi.com/get_cities_details_by_name';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Key': 'b7f78328f1msh650327bb4a94881p13a6d2jsn2e27c4098761',
      'X-RapidAPI-Host': 'cities-cost-of-living1.p.rapidapi.com',
    },
    body: JSON.stringify({
      cities,
      currencies,
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    // Handle the result and extract the necessary data for rendering

    res.render('search-results', {
      cities,
      currencies,
      data: result.data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;

