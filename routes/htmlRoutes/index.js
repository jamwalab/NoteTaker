const path = require('path');
const router = require('express').Router();

//Homepage
router.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

//Notes page
router.get('/notes', (req,res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

//for any other
router.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;