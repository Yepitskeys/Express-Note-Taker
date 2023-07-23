const express = require('express');

// Creates the port
const PORT = process.env.PORT || 3001;

// Creates the express app
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Handle parsing of data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Creates the public folder host
app.use(express.static('public'));

// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => console.log(`Listening on the followeing PORT: ${PORT}!`));