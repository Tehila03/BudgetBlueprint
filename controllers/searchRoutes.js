const { Router } = require('express');
const { CostOfLiving } = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const router = Router();

router.get("/", (req, res) => {
  const result = req.query.result || null;
  res.render("homepage", { result });
});

router.post('/', async (req, res) => {
  try {
    const { city1, city2 } = req.body;
    const city1Data = await CostOfLiving.findOne({ where: { city: { [Op.like]: `%${city1}%` } } });
    const city2Data = await CostOfLiving.findOne({ where: { city: { [Op.like]: `%${city2}%` } } });
    const homeCity = city1Data.get({ plain: true });
    const destinationCity = city2Data.get({ plain: true });


    const result = calculateDifference(homeCity, destinationCity);
    res.redirect(`/?result=${result}`);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;




