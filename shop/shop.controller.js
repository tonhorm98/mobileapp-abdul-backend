import * as shopService from './shop.service.js'
import s3 from '../connectS3.js'

export const getAll = async (req, res) => {
    const shops = await shopService.getAll();
    // s3 function
    for(let i = 0; i < shops.length; i+=1) {
    
      if(shops[i].picture) {
        let key = shops[i].picture;

        const params = {
          Bucket: 'pltest',
          Key: key,
          Expires: 30
        }

        const urlImg = s3.getSignedUrl('getObject', params);

        shops[i].picture = urlImg
        // console.log(promotions[i])
      }
    }
    console.log(shops)
    res.status(200).send(shops)
}

export const createData = async (req, res) => {
    const {data} = req.body
    // console.log(data)
    const insertResult = await shopService.createData(data);
    //   console.log(insertResult)
      res.send(insertResult);
  
  } 

  export const uploadImage = async (req, res) => {
    // console.log(req)
    const shopId = req.body.shopId // value of promotionId
    // console.log(data)
    // s3
    if(req.files) {
      const FileData = req.files.image
  
      if(FileData != null){
          const key = 'shopid' + shopId + '.jpg';
          // console.log(key)
          const params = {
              Bucket: 'pltest', 
              Key: key,
              Body: FileData.data,
              ContentDisposition: 'inline',
              ContentType: 'image/jpg',
          };
          s3.upload(params, (s3Err, data) => {
              if(s3Err){
                  // console.log('loop1')
                  // res.status(500).send({status:'E', detail: s3Err})
              } else {
                  // console.log('complete')
                  // res.send({status: '1'})
              }
          });
  
          const updateResult = await shopService.uploadImage(shopId);
          if (updateResult.affectedRows === 0) {
              res.status(400).send({
                status: 'error',
                message: 'shop not found',
              });
              return;
            }
        
            res.status(200).send({
              status: 'success',
            });
        
      } else {
          // res.status(500).send({status:'E', detail: 'File Upload Is Null?'})
      } 
   
    }
   
  } 

  export const deleteData = async (req, res) => {
    const {data} = req.body
    console.log('data', data)
    // console.log(data)
    // const editedCompany = req.body
    let id = data
    const deleteResult = await shopService.deleteData(id);
    if (deleteResult.affectedRows === 0) {
        res.status(400).send({
          status: 'error',
          message: 'shop not found',
        });
        return;
      }
    
  
      res.status(200).send({
        status: 'success',
      });
  } 

  export const updateData = async (req, res) => {
    const {data} = req.body
    const updateResult = await shopService.updateData(data);
    if (updateResult.affectedRows === 0) {
        res.status(400).send({
          status: 'error',
          message: 'shop not found',
        });
        return;
      }
  
      res.status(200).send({
        status: 'success',
      });
} 