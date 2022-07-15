const express = require("express");
const { getPeople, getPerson, addPerson, updatePerson, patchPerson , deletePerson } 
= require("../../controllers/people_api/people");

const router = express.Router();

// get all people
router.get("/", getPeople);

// get one person
router.get("/:id", getPerson);

// post one person 
router.post("/", addPerson);

// put/patch/update one person
router.patch('/:id', patchPerson);

router.put('/:id', updatePerson);

// delete one person
router.delete('/:id', deletePerson);

module.exports = router;
