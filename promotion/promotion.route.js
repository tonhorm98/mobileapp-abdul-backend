import { Router } from "express";
import * as promotionController from './promotion.controller.js'
import validateToken from './promotion.middleware.js'

const router = Router()

router.get('/', validateToken, promotionController.getAll);
// router.post('/getpromotioneachcompany', promotionController.getEachCompany);
// router.post('/update', promotionController.updateData)
// router.post('/create', promotionController.createData)
// router.post('/delete', promotionController.deleteData)
// router.post('/approvepromotion', promotionController.approvePromotion)
// router.post('/rejectpromotion', promotionController.rejectPromotion)
// router.post('/uploadimage', promotionController.uploadImage)
// router.post('/updatevisible', promotionController.updateVisible)




export default router