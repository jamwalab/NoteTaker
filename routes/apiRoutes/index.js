//-----DECLATATIONS-----//
const router = require('express').Router();
const {getNewId, validateNote, saveNote, deleteNote} = require('../../lib/notes');
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
    const newNotes = saveNote(req.body, notes);
    res.json(newNotes)
  }  
});

//-----API ROUTE - NOTES POST STATEMENT-----//
router.delete('/notes/:id', (req, res) => {
  //send id and array to delete function
  const newNotesArray = deleteNote(req.params.id, notes);
  //save to db
  const newNotes = saveNote('', newNotesArray);
  res.json(newNotes)
});

module.exports = router;