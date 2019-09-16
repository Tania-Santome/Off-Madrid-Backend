const mysql = require('mysql');

let pool = null;

// Realiza la conexion
function connect(done) {
    pool = mysql.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: 'root',
        database: 'offmadrid',
        port: 8889
    })

    // Ejecucionn callback
    done();
}

// Te devuelve la conexion
function get() {
    return pool;
}

module.exports = {
    connect: connect,
    get: get
}