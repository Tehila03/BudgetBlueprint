const express = require('express');
const app = express();
const searchRoutes = require('./searchRoutes');

app.use('/api', searchRoutes);


app.listen(3306, () => {
  console.log('Server listening on port 3000');
});

