import * as express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

const facebookAuthRoute=express.Router()

const APP_ID=process.env.APP_ID
const APP_SECRET=process.env.APP_SECRET
const REDIRECT_URI=`http://localhost:3500/auth/facebook/callback`

facebookAuthRoute.get('/',(req,res)=>{

    //when the user successfully logs in the following facebook login consent page will send 
    //a get request to the REDIRECT_URI which is your callback route
    const redirectUrl=`https://www.facebook.com/v21.0/dialog/oauth?client_id=${APP_ID}&display=popup
    &response_type=code&redirect_uri=${REDIRECT_URI}`;
    res.redirect(redirectUrl)
})

export default facebookAuthRoute