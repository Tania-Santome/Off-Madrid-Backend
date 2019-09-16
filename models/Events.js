
const db = require('../db');

function getAll() {
    return new Promise((resolve, reject) => {
        db.get().query('select * from events', (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        })
    })
}
const getById = (pEventsId) => {
    return new Promise((resolve, reject) => {
        db.get().query('select * from events where id = ?', [pEventsId], (err, rows) => {
            if (err) reject(err)
            rows.length == 0 ? reject('No existe evento para esa id') : resolve(rows[0])
        })
    })
}

const insert = ({ id, user_id, location_id, name, type, start_date, end_date, image, description, price, created_at, updated_at }) => {
    return new Promise((resolve, reject) => {
        let q = 'insert into events (id, user_id, location_id, name, type, start_date, end_date, image, description, price, created_at, updated_at  ) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        db.get().query(q, [id, user_id, location_id, name, type, start_date, end_date, image, description, price, created_at, updated_at], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
}



module.exports = {
    getAll: getAll,
    getById: getById,
    insert: insert,

}