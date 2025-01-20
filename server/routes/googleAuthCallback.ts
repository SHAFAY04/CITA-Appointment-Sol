import * as express from 'express'
import Users from "../model/userSchema"

const CLIENT_ID=process.env.CLIENT_ID
const CLIENT_SECRET=process.env.CLIENT_SECRET
const REDIRECT_URI=`http://localhost:3500/auth/google/callback`

const googleAuthCallback=express.Router()

googleAuthCallback.get('/',async(req,res)=>{

    
    const {error,code}=req.query

    if(error){
        return res.status(400).json({message:"Access Denied By User!"})
    }
    
    res.json(code)
//     const tokenBody={
//         code,
//         client_id:CLIENT_ID,
//         client_secret:CLIENT_SECRET,
//         redirect_uri:REDIRECT_URI,
//         grant_type:"authorization_code"
//     }
//     try {
//         const response = await fetch("https://oauth2.googleapis.com/token",{
//             method:"POST",
//             body:JSON.stringify({...tokenBody})
//         })
//         const data=await response.json()
//         const {access_token}=data
        
//         const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
//             headers: {
//               Authorization: `Bearer ${access_token}`,
//             },
//           });
//           const userInfo = await userInfoResponse.json();
//           console.log(userInfo);
//           const {email}=userInfo
          
//           const alreadyExistingUser=await Users.findOne({where:{email:email}})

//           const resObj={
//             username:alreadyExistingUser?.getDataValue("username"),
//             ...userInfo
//           }
//           if(alreadyExistingUser){
//             res.setHeader('Content-Type', 'text/html');
//             return res.json(`<script> window.opener.postMessage(${JSON.stringify(resObj)}, "*");window.close();</script>`)
//           }
//           // const newUserObj={
//           //   username:email.substring(0,email.lastIndexOf("@")),
//           //   refreshtoken:,
//           //   roles:
//           //   picture:userInfo.picture
//           // }
//           // const newUser= await Users.create({newUserObj})
//           // res.setHeader('Content-Type', 'text/html');
//           // return res.json(`<script> window.opener.postMessage(${JSON.stringify(newUserObj)}, "*");window.close();</script>`)

//     } catch (error) {
//         res.setHeader('Content-Type', 'text/html');
// res.status(400).json(`<script> window.opener.postMessage({ error: "Login failed" }, "*");window.close();</script>`)
     
//     }

})

export default googleAuthCallback