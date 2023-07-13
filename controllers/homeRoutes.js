const router = require('express').Router();


router.get('/', async (req, res) => {
  const url = 'https://cities-cost-of-living1.p.rapidapi.com/get_cities_list';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
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

  // Add route handlers and functionality 

  res.render('homepage', { 
    // Pass any data needed for rendering the homepage
  });
});

// Add more route handlers and functionality

module.exports = router;

