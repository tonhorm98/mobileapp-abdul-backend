import pool from "../database.js";


export const getAll = async () => {
    const sql = `SELECT id, picture, nameTH, nameEN, detail FROM shops WHERE isActive = 1`
    const [shops] = await pool.query(sql)
    return shops
}

// export const createData = async (data) => {
//     // edit later
//     const {nameTH, nameEN, detail} = data
//     const sql = `INSERT INTO shops SET nameTH = ?, nameEN = ?, detail = ?`
//     const [insertResult] = await pool.query(sql,[nameTH, nameEN, detail])
//     return insertResult 
// }

// export const uploadImage = async (shopId) => {
//     const picturename = 'shopid' + shopId + '.jpg'
//     const sql = `UPDATE shops SET picture = ? WHERE id = ? LIMIT 1`
//     const [updateResult] = await pool.query(sql,[picturename, shopId])
//     return updateResult

// }

// export const deleteData = async (id) => {
//     // edit later
//     const sql = `UPDATE shops SET isActive = 0 WHERE id = ? LIMIT 1`
//     const [deleteResult] = await pool.query(sql,id)
//     // console.log(deleteResult)
//     return deleteResult
// }

// export const updateData = async (data) => {
//     // edit later
//     console.log(data)
//     const {nameTH, nameEN, detail, id} = data
//     const shopId = id
//     const sql = `UPDATE shops SET nameTH = ?, nameEN = ?, detail = ? WHERE id = ? LIMIT 1`
//     const [updateResult] = await pool.query(sql,[nameTH, nameEN, detail, shopId])
//     return updateResult
// }