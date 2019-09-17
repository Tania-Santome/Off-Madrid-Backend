
const express = require('express');
const app = express();
const path = require('path');
const db = require('./db');
const cors = require('cors');

// Settings
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/', function (req, res) {
    res.sendFile('/public/index.html');
});

app.use('/api/events', require('./routes/events'));
app.use('/api/locations', require('./routes/locations'));
// Conectarse a la base de datos
db.connect(() => {

    // Levantas el servidor en el puerto 3000
    app.listen(PORT, function () {
        console.log(`Example app listening on http://localhost:${PORT}`);
    });

});