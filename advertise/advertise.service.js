import pool from "../database.js";

export const getAll = async () => {
    const sql = `SELECT id, picture, topic, detail FROM advertises WHERE isActive = 1 AND isVisible = 1 ORDER BY id`
    const [advertises] = await pool.query(sql)
    return advertises
}