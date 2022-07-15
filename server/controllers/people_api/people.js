const Model = require('../../models/peopleModel');

const getPeople = async (req, res) => {
    try{
        const data = await Model.find();
        res.status(200).json({"success": true, "data": data});
    }catch(error){
        res.status(500).json({"success": false, "message": error.message});
    }
}

const getPerson = async (req, res) => {
    const {id} = req.params;
    try {
        const data = await Model.findById(id);
        res.status(200).json({"success": true, "data":data});
    }catch(error){
        res.status(500).json({"success": false, "message":error.message});
    }
}

const addPerson = async (req, res) => {
    const {name, lastName, age} = req.body
    const data = new Model({
        name: name,
        lastName: lastName,
        age: age 
    });

    try {
        const dataToSave = await data.save();
        // res.status(201).json({"success": true, data: dataToSave})
        res.status(201).json({"success": true, "data":dataToSave});
    }catch(error){
        res.status(400).json({"success": false ,"message": error.message});
    }

    // res.send("POST API");
}

const updatePerson = async (req, res) => {

    const updatedData = req.body;
    // const id = req.params.id 
    const {id} = req.params;
    const options = {new: true };

    try{
        const updatedDataValues = await Model.findByIdAndUpdate(
            id, updatedData , options
        );
        res.status(200).json({"success":true, data:updatedDataValues});
    }catch(error){
        res.status(500).json({"success": false , "message": error.message});
    }
}

const patchPerson = async (req, res) => {
    const updatedData = req.body;
    // const id = req.params.id 
    const {id} = req.params;
    const options = {new: true };

    try{
        const result = await Model.findByIdAndUpdate(
            id, updatedData , options
        );
        res.status(200).json({"success":true, data:result});
    }catch(error){
        res.status(500).json({"success": false , "message": error.message});
    }
}

const deletePerson = async  (req, res) => {
    const id = req.params.id;
    try{
        const data = await Model.findByIdAndDelete(id);
        res.status(200).json({"success":true , data:data});
    }catch(error){
        res.status(500).json({"success":false, "message":error.message});
    }
}

module.exports = {
getPeople, getPerson, updatePerson, deletePerson, patchPerson, addPerson
}