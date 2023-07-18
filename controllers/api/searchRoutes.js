const { Router } = require('express');
const CostOfLiving = require('../../models');

const router = Router();
router.get('/', async (req,res) => {
  try {
    const{city1, city2} = req.body
    const city1Data = await CostOfLiving.findOne ({where:{city:city1}})
    const city2Data = await CostOfLiving.findOne ({where:{city:city2}})
    const homeCity = city1Data.get({plain:true})
    const destinationCity = city2Data.get({plain:true})
    res.status(200).json({homeCity,destinationCity})
  } catch (error) {
   res.status(500).json(error.message) 
  }

})

module.exports = router;

