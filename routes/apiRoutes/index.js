//-----DECLATATIONS-----//
const router = require('express').Router();
const {getNewId} = require('../../lib/notes');
const {notes} = require('../../db/db.json');

//-----API ROUTE - NOTES GET STATEMENT-----//
router.get('/notes', (req, res) => {
  res.json(notes);
})

//-----API ROUTE - NOTES POST STATEMENT-----//
router.post('/notes', (req, res) => {
  //get id of the new note
  let newId = getNewId(notes);
  //add id to the new note object
  req.body.id = newId.toString();
  res.json(req.body)
})

module.exports = router;