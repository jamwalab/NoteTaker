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
    console.log(newId);
    return newId+1;
  }  
}

module.exports = {
  getNewId
}