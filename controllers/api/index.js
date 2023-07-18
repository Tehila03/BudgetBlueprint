const router = require('express').Router();
const searchRoutes = require('./searchRoutes');
const userRoutes = require('./userRoutes');

router.use('/users',userRoutes);
router.use('/search', searchRoutes);

module.exports=router
