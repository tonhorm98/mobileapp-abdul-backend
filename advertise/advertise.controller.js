import * as advertiseService from './advertise.service.js'
import s3 from '../connectS3.js'

export const getAll = async (req, res) => {
    const advertises = await advertiseService.getAll();
    // s3 function(ใส้่รูป)
    for(let i = 0; i < advertises.length; i+=1) {
    
      if(advertises[i].picture) {
        let key = advertises[i].picture;

        const params = {
          Bucket: 'pltest',
          Key: key,
          Expires: 30
        }

        const urlImg = s3.getSignedUrl('getObject', params);

        advertises[i].picture = urlImg
        // console.log(promotions[i])
      }
    }
    res.status(200).send(advertises)
}