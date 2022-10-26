import pool from "../database.js";
import s3 from '../connectS3.js'

// import * as S3Controller from "../S3Controller.js" 
//read data
export const getAll = async () => {
    const sql = `SELECT id, nameTH, nameEN, picture, topic, detail, SUBSTRING(startDate, 1, 10) AS startDate , SUBSTRING(endDate, 1, 10) AS endDate FROM vPromotion WHERE isVisible = 1 AND promotionStatusId = 2 ORDER BY id `
    const [promotions] = await pool.query(sql)
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      }

    for(let i = 0; i < promotions.length; i+=1){
      let start = promotions[i].startDate
      let startDay = start.substring(8)
      let startMonth = start.substring(5, 7) - 1
      let startYear = start.substring(0, 4)
      let eventStart = new Date(startYear, startMonth, startDay)
      let startDateLocale = eventStart.toLocaleString('th-TH', options)

      let end = promotions[i].endDate
      let endDay = end.substring(8)
      let endMonth = end.substring(5, 7) - 1
      let endYear = end.substring(0, 4)
      let eventEnd = new Date(endYear, endMonth, endDay)
      let endDateLocale = eventEnd.toLocaleString('th-TH', options)

      promotions[i].period = startDateLocale + ' - ' + endDateLocale
      delete promotions[i].startDate;
      delete promotions[i].endDate;

    }
    console.log(promotions)
    
    return promotions
}


// export const getEachCompany = async (data) => {
//     const companyNameEN = data

//     const sql1 = `SELECT Id FROM companies WHERE nameEN = ?`   
//     const [checkId] = await pool.query(sql1,companyNameEN)
//     const companyId = checkId[0].Id

//     const sql = `SELECT * FROM vPromotion WHERE companyId = ? AND promotionStatusId <> 5 ORDER BY id`
//     const [promotions] = await pool.query(sql, companyId)
//     return promotions
// }
// // approve promotion
// export const getAllVisible = async () => {
//     const sql = `SELECT * FROM promotions WHERE isVisible = 1`
//     const [promotions] = await pool.query(sql)
//     return promotions
// }
// //  non-approve promotion
// export const getAllInVisible = async () => {
//     const sql = `SELECT * FROM promotions WHERE isVisible = 0`
//     const [promotions] = await pool.query(sql)
//     return promotions
// }
// //update data
// export const updateData = async (data) => {
//     const {topic, detail, startDate, endDate, promotionId, nameEN, switch1} = data
//     let isVisible = 0
//     if(switch1){
//         isVisible = 1
//     }
//     //find companyId from table companies
//     const sql1 = `SELECT Id FROM companies WHERE nameEN = ?`   
//     const [checkId] = await pool.query(sql1,nameEN)
//     const companyId = checkId[0].Id
    
//     const sql = `UPDATE promotions SET companyId = ?, topic = ?, detail = ?, startDate = ?, endDate = ?, isVisible = ? WHERE Id = ? LIMIT 1`
//     const [updateResult] = await pool.query(sql,[companyId, topic, detail, startDate, endDate, isVisible, promotionId])
//     return updateResult
// }

// export const uploadImage = async (promotionId) => {
//     const picturename = 'promotionid' + promotionId + '.jpg'
//     const sql = `UPDATE promotions SET picture = ? WHERE Id = ? LIMIT 1`
//     const [updateResult] = await pool.query(sql,[picturename, promotionId])
//     return updateResult
//     // const {topic, detail, startDate, endDate, promotionId, nameEN, picture} = data

// }

// export const createData = async (data) => {
//     const {topic, detail, startDate, endDate, switch1, companyNameEN} = data
//     // console.log(data)
//     let isVisible = 0
//     if(switch1){
//         isVisible = 1
//     }
//     //find companyId from table companies
//     const sql1 = `SELECT Id FROM companies WHERE nameEN = ?`   
//     const [checkId] = await pool.query(sql1,companyNameEN)
//     const companyId = checkId[0].Id


//     // 4/10/2022 ไม่ฝช้ข้างบนเพราะเราจะเพิ่ม company จาก user ที่ใช้
//     const sql = `INSERT INTO promotions SET companyId = ? ,topic = ?, detail = ?, startDate = ?, endDate = ?, isVisible = ?, promotionStatusId = 1`
//                                                    //   '-- mock up value, will edit later
//     const [insertResult] = await pool.query(sql,[companyId, topic, detail, startDate, endDate, isVisible])
//     return insertResult //เหมือนจะไม่ใช้
// }

// export const deleteData = async (id) => {
//     // edit later
//     const sql = `UPDATE promotions SET promotionStatusId = 5 WHERE Id = ? LIMIT 1`
//     const [deleteResult] = await pool.query(sql,id)
//     // console.log(deleteResult)
//     return deleteResult
// }

// export const rejectPromotion = async (data) => {
//     // console.log(data)
//     const {promotionId, rejectReason} = data

//     //find companyId from table companies
//     const sql = `UPDATE promotions SET promotionStatusId = 3, rejectReason = ?, isVisible = 0 WHERE Id = ? LIMIT 1`
//     const [updateResult] = await pool.query(sql,[rejectReason, promotionId])
//     return updateResult
// }

// export const approvePromotion = async (data) => {
//     // console.log(data)
//     const {topic, detail, startDate, endDate, promotionId, switch1} = data
//     let isVisible = 0
//     if(switch1){
//         isVisible = 1
//     }

//     //find companyId from table companies
//     const sql = `UPDATE promotions SET topic = ?, detail = ?, startDate = ?, endDate = ?, isVisible = ?, promotionStatusId = 2, rejectReason = NULL WHERE Id = ? LIMIT 1`
//     const [updateResult] = await pool.query(sql, [topic, detail, startDate, endDate, isVisible, promotionId])
//     return updateResult
// }

// export const updateVisible = async (data) => {
//     const {promotionId, switch1} = data
//     let isVisible = 0
//     if(switch1){
//         isVisible = 1
//     }
    
//     const sql = `UPDATE promotions SET isVisible = ? WHERE Id = ? LIMIT 1`
//     const [updateResult] = await pool.query(sql,[isVisible, promotionId])
//     return updateResult
// }