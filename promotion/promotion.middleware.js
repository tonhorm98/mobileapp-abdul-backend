import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    console.log('middleware 1')
    console.log('req', req)
    // splite error when req
    let token = req.headers.authorization
    const splitToken = token.split(' ')
    token = splitToken[1]
    console.log('token', token)

    //validate
    try {
        const decoded = jwt.verify(token, 'october25');
        // console.log('decode', decoded)
        res.locals.user = decoded
        // console.log('decode',res.locals.user)
    next()
    } catch (error) {
        res.status(401).send('token invalid')
    }
    
}