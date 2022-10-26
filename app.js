import 'dotenv/config'
import express from "express";
// import companyRouter from './company/company.route.js'
import promotionRouter from './promotion/promotion.route.js'
import advertiseRouter from './advertise/advertise.route.js'
// import qrpaymentRouter from './qrpayment/qrpayment.route.js'
// import loginRouter from './login/login.route.js'
import shopRouter from './shop/shop.route.js'
// import userRouter from './user/user.route.js'

import cors from 'cors'
import fileUpload from 'express-fileupload';

const app = express()
const {PORT} = process.env

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(fileUpload({
    createParentPath: true  
}));

app.use(cors());

// web control
app.get("/", (req, res) => {
    res.send(`<button>test</button>`)
})
app.use('/shop', shopRouter )
app.use('/promotion', promotionRouter)
app.use('/advertise', advertiseRouter)

app.get("/reset", (req, res) => {
    res.send(`reset`)
    process.exit(0)
})
// mobile app //use another express file
// app.use('/mobileapp')

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})