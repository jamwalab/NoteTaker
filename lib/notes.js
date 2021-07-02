const fs = require('fs');
const path = require('path');

//-----GET NEW ID BASED ON THE LAST ID IN THE JSON ARRAY-----//
const getNewId = (notes) => {  
  //If array is empty return id as 1
  if (notes.length === 0) {
    return 1;
  } 
  //else return id# on last json object + 1
  else {
    let newId = parseInt(notes[notes.length -1].id);
    return newId+1;
  }  
}

//-----VALIDATE NEW NOTE-----//
const validateNote = newNote => {
  //check title is blank or not string
  if (!newNote.title || typeof newNote.title !== 'string') {
    return false;
  }
  //check text is blank or not string
  if (!newNote.text || typeof newNote.text !== 'string') {
    return false;
  }
  return true;
}

//-----SAVE NEW NOTE-----//
const saveNote = (newNote, notesArr) => {
  //add new note to array
  notesArr.push(newNote);
  //Write array to db
  fs.writeFileSync(
    path.join(__dirname,'../db/db.json'),
    JSON.stringify({notes: notesArr}, null, 2)
  );
  return newNote;
}

module.exports = {
  getNewId,
  validateNote,
  saveNote
}