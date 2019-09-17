
const db = require('../db');

function getAll() {
    return new Promise((resolve, reject) => {
        db.get().query('select * from locations', (err, rows) => {
            if (err) reject(err)
            resolve(rows)
        })
    })
}
const getById = (pLocationsId) => {
    return new Promise((resolve, reject) => {
        db.get().query('select * from locations where id = ?', [pLocationsId], (err, rows) => {
            if (err) reject(err)
            rows.length == 0 ? reject('No existe teatro para esa id') : resolve(rows[0])
        })
    })
}

const insert = ({ id, user_id, name, image, description, type, city, cp, address, lat, lng, url, capacity, phone, email, created_at, updated_at }) => {
    return new Promise((resolve, reject) => {
        db.get().query(q, [id, user_id, name, image, description, type, city, cp, address, lat, lng, url, capacity, phone, email, new Date(), new Date()], (err, result) => {
            if (err) reject(err)
            resolve(result)
        });
    })
}

const deleteById = (pId) => {
    return new Promise((resolve, reject) => {
        db.get().query('delete from locations where id = ?', [pId], (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

const update = ({ id, user_id, name, image, description, type, city, cp, address, lat, lng, url, capacity, phone, email }) => {
    return new Promise((resolve, reject) => {

        let sql = "UPDATE locations SET user_id = ?,  name = ?, image = ?, description = ?, type = ?, city = ?,  cp = ?,  address = ?,  lat = ?,  lng = ?,  url = ?, capacity = ?, phone = ?, email= ?  WHERE id = ? ";

        db.get().query(sql, [user_id, name, image, description, type, city, cp, address, lat, lng, url, capacity, phone, email, id], (err, result) => {
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