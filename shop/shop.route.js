import { Router } from "express";
import * as shopController from './shop.controller.js'
import validateToken from './shop.middleware.js'

const router = Router()

router.get('/', validateToken, shopController.getAll);
// router.post('/update', shopController.updateData)
// router.post('/create', shopController.createData)
// router.post('/delete', shopController.deleteData)
// router.post('/uploadimage', shopController.uploadImage)



export default router