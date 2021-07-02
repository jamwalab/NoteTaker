//-----DECLATATIONS-----//
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;
//Parse incoming string or array
app.use(express.urlencoded({extended: true}));
//Parse incoming Json data
app.use(express.json());

app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}!!`);
})