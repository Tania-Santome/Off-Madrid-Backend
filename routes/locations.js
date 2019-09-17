const express = require('express');
const router = express.Router();
const locationEvent = require('../models/Location');

// Get all
router.get('/', function (req, res) {
    locationEvent.getAll()
        .then(response => {
            console.log(response);
            res.json(response);
        })
        .catch(error => {
            console.log(error);
            res.send("Errroooorr!!!");
        });
});

// Get one
router.get('/:locationsId', (req, res) => {
    locationEvent.getById(req.params.locationsId)
        .then(event => res.json(event))
        .catch(error => res.json(error));
});

// Insert
router.post('/', (req, res) => {
    locationEvent.insert(req.body)
        .then(result => res.json(result))
        .catch(error => res.json(error));
});

//delete

router.delete('/:locationsId', (req, res) => {
    locationEvent.deleteById(req.params.locationId)
        .then(result => res.json(result))
        .catch(error => res.json(error));
});

//post

router.put('/', (req, res) => {
    locationEvent.update(req.body)
        .then(result => res.json(result))
        .catch(error => res.json(error));
});


module.exports = router;