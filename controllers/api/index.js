const router = require('express').Router();
const searchRoutes = require('./searchRoutes');

router.use('/search', searchRoutes);

module.exports=router
