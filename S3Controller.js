import s3 from './connectS3.js'

export const uploadImage = (req,res) => {
    const FileData = req.files.PictureUpload

    if(FileData != null){
        const key = FileData.name;
        const params = {
            BucketL: BucketPhoto,
            Key: key,
            Body: FileData.data,
            ContentDisposition: 'inline',
            ContentType: 'image/jpg',
        };

        s3.upload(params, (s3Err, data) => {
            if(s3Err){
                res.status(500).send({status:'E', detail: s3Err})
            } else {
                res.send({status: '1'})
            }
        });
    } else {
        res.status(500).send({status:'E', detail: 'File Upload Is Null?'})
    }   
};

// export const uploadimg = (req, res) => {

//     let FileData = req.files.PictureUpload;
//     let Auth = decodeOne(req.body.Auth);

//     // console.log(Auth)

//     if (FileData != null && Auth == 'OK') {

//         let key = FileData.name;

//         const params = {
//             Bucket: BucketPhoto,
//             Key: key,
//             Body: FileData.data,
//             ContentDisposition: "inline",
//             ContentType: 'image/jpg'
//         };

//         s3.upload(params, function (s3Err, data) {
//             if (s3Err) {
//                 res.status(500).send({ status: "E", detail: s3Err })
//             } else {
//                 res.send({ status: "1" });
//             }
//         });

//     } else {
//         res.status(500).send({ status: 'E', detail: 'File Upload Is Null OR User Unauthorized' })
//     }

// }