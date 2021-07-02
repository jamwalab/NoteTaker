//-----DECLATATIONS-----//
const router = require('express').Router();
const {getNewId, validateNote, saveNote} = require('../../lib/notes');
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
  //Check note format
  if (!validateNote(req.body)) {
    res.status(400).send('New note is blank or not properly formatted');
  }
  else {
    const newNote = saveNote(req.body, notes);
    res.json(notes)
  }  
});

module.exports = router;