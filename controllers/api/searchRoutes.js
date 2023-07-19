const Router = require('express');
const { CostOfLiving } = require('../../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const router = Router();

router.get('/', async (req, res) => {
  try {
    console.log(req.body)
    const{city1, city2} = req.body
    const city1Data = await CostOfLiving.findOne ({where:{city:{[Op.like]: `%${city1}%`}}})
    const city2Data = await CostOfLiving.findOne ({where:{city:{[Op.like]: `%${city2}%`}}})
    const homeCity = city1Data.get({plain:true})
    const destinationCity = city2Data.get({plain:true})
    res.status(200).json({homeCity,destinationCity})
  } catch (error) {
   res.status(500).json(error.message) 
  }
  // try {
  //   res.status(200).json({ message: 'GET request received' });
  // } catch (error) {
  //   res.status(500).json(error.message);
  // }
});


// router.post('/', async (req,res) => {


// })

module.exports = router;



