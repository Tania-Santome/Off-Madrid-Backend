const express = require('express');
const router = express.Router();
const modelEvent = require('../models/Events');

// Get all
router.get('/', function (req, res) {
    modelEvent.getAll()
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
router.get('/:eventsId', (req, res) => {
    modelEvent.getById(req.params.eventsId)
        .then(event => res.json(event))
        .catch(error => res.json(error));
});

// Insert
router.post('/', (req, res) => {
    modelEvent.insert(req.body)
        .then(result => res.json(result))
        .catch(error => res.json(error));
});

//delete

router.delete('/:eventsId', (req, res) => {
    modelEvent.deleteById(req.params.eventId)
        .then(result => res.json(result))
        .catch(error => res.json(error));
});

//post

router.put('/', (req, res) => {
    modelEvent.update(req.body)
        .then(result => res.json(result))
        .catch(err => res.json(err));
});


module.exports = router;