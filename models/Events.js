
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

const insert = ({ id, user_id, location_id, name, type, start_date, end_date, image, description, price }) => {
    return new Promise((resolve, reject) => {
        db.get().query(q, [id, user_id, location_id, name, type, start_date, end_date, image, description, price, new Date(), new Date()], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
}

const deleteById = (pId) => {
    return new Promise((resolve, reject) => {
        db.get().query('delete from events where id = ?', [pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

const update = ({ id, user_id, location_id, name, type, start_date, end_date, image, description, price }) => {
    return new Promise((resolve, reject) => {

        let sql = "UPDATE events SET user_id = ?, location_id = ?, name = ?, type = ?, start_date = ?, end_date = ?, image = ?, description = ?, price = ? WHERE id = ?";

        db.get().query(sql, [user_id, location_id, name, type, start_date, end_date, image, description, price, id], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    })
}


module.exports = {
    getAll: getAll,
    getById: getById,
    insert: insert,
    deleteById: deleteById,
    update: update,

}