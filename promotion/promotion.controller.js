import * as promotionService from './promotion.service.js'
import s3 from '../connectS3.js'

export const getAll = async (req, res) => {
    const promotions = await promotionService.getAll();
    // s3 function
    for(let i = 0; i < promotions.length; i+=1) {
    
      if(promotions[i].picture) {
        let key = promotions[i].picture;

        const params = {
          Bucket: 'pltest',
          Key: key,
          Expires: 30
        }

        const urlImg = s3.getSignedUrl('getObject', params);

        promotions[i].picture = urlImg
        // console.log(promotions[i])
      }
    }
    res.status(200).send(promotions)
}

// export const getEachCompany = async (req, res) => {
//   const {data} = req.body
//   const promotions = await promotionService.getEachCompany(data);
//   // s3 function
//   for(let i = 0; i < promotions.length; i+=1) {
  
//     if(promotions[i].picture) {
//       let key = promotions[i].picture;

//       const params = {
//         Bucket: 'pltest',
//         Key: key,
//         Expires: 30
//       }

//       const urlImg = s3.getSignedUrl('getObject', params);

//       promotions[i].picture = urlImg
//       // console.log(promotions[i])
//     }
//   }
//   res.status(200).send(promotions)
// }

// export const updateData = async (req, res) => {
//     const {data} = req.body
//     // console.log(data)
//     // console.log(data)
//     const updateResult = await promotionService.updateData(data);
//     if (updateResult.affectedRows === 0) {
//         res.status(400).send({
//           status: 'error',
//           message: 'promotion not found',
//         });
//         return;
//       }
  
//       res.status(200).send({
//         status: 'success',
//       });
// } 

// export const uploadImage = async (req, res) => {
//   // const data = req.files.image
//   // console.log(data)
//   console.log(req)
//   const promotionId = req.body.promotionId // value of promotionId
//   // console.log(data)
//   // s3
//   if(req.files) {
//     const FileData = req.files.image

//     if(FileData != null){
//         const key = 'promotionid' + promotionId + '.jpg';
//         // console.log(key)
//         const params = {
//             Bucket: 'pltest', 
//             Key: key,
//             Body: FileData.data,
//             ContentDisposition: 'inline',
//             ContentType: 'image/jpg',
//         };
//         // console.log('filedata', FileData)
//         s3.upload(params, (s3Err, data) => {
//             if(s3Err){
//                 // console.log('loop1')
//                 // res.status(500).send({status:'E', detail: s3Err})
//             } else {
//                 // console.log('complete')
//                 // res.send({status: '1'})
//             }
//         });

//         const updateResult = await promotionService.uploadImage(promotionId);
//         if (updateResult.affectedRows === 0) {
//             res.status(400).send({
//               status: 'error',
//               message: 'promotion not found',
//             });
//             return;
//           }
      
//           res.status(200).send({
//             status: 'success',
//           });
      
//     } else {
//         // res.status(500).send({status:'E', detail: 'File Upload Is Null?'})
//     } 
 
//   }
 
// } 

// export const createData = async (req, res) => {
//   const {data} = req.body
//   // console.log(data)
//   const insertResult = await promotionService.createData(data);
//   console.log(insertResult)

//   res.send(insertResult);
// } 

// export const deleteData = async (req, res) => {
//   const {data} = req.body
//   // console.log(data)
//   // for(let i = 0; i < data.length; i+=1) {
//   //   let id = data[i]
//   //   const deleteResult = await promotionService.deleteData(id);
//   // if (deleteResult.affectedRows === 0) {
//   //     res.status(400).send({
//   //       status: 'error',
//   //       message: 'promotion not found',
//   //     });
//   //     return;
//   //   }
//   // }
//   // res.status(200).send({
//   //     status: 'success',
//   // });
//   let id = data
//   const deleteResult = await promotionService.deleteData(id);
//   if (deleteResult.affectedRows === 0) {
//       res.status(400).send({
//         status: 'error',
//         message: 'promotion not found',
//       });
//       return;
//   }
//   res.status(200).send({
//       status: 'success',
//   });
// }

// export const rejectPromotion = async (req, res) => {
//   const {data} = req.body
//   // console.log(data)
//   // console.log(data)
//   const updateResult = await promotionService.rejectPromotion(data);
//   if (updateResult.affectedRows === 0) {
//       res.status(400).send({
//         status: 'error',
//         message: 'promotion not found',
//       });
//       return;
//     }

//     res.status(200).send({
//       status: 'success',
//     });
// } 

// export const approvePromotion = async (req, res) => {
//   const {data} = req.body
//   const updateResult = await promotionService.approvePromotion(data);
//   if (updateResult.affectedRows === 0) {
//       res.status(400).send({
//         status: 'error',
//         message: 'promotion not found',
//       });
//       return;
//     }

//     res.status(200).send({
//       status: 'success',
//     });
// } 

// export const updateVisible = async (req, res) => {
//   const {data} = req.body
//   // console.log(data)
//   // console.log(data)
//   const updateResult = await promotionService.updateVisible(data);
//   if (updateResult.affectedRows === 0) {
//       res.status(400).send({
//         status: 'error',
//         message: 'promotion not found',
//       });
//       return;
//     }

//     res.status(200).send({
//       status: 'success',
//     });
// } 
