import * as express from 'express'
import * as dotenv from 'dotenv'

dotenv.config()

const googleAuthRoute=express.Router()

const CLIENT_ID=process.env.CLIENT_ID
const CLIENT_SECRET=process.env.CLIENT_SECRET
const REDIRECT_URI=`http://localhost:3500/auth/google/callback`

googleAuthRoute.get('/',(req,res)=>{

//     Authenticate the user with the Auth Route.
// The auth route returns a URL to authenticate with third-party service, such as login with Google. The frontend (such as a storefront), when it receives a location property in the response, must redirect to the returned location.
// Once the authentication with the third-party service finishes, it redirects back to the frontend with a code query parameter. So, make sure your third-party service is configured to redirect to your frontend page after successful authentication.
// The frontend sends a request to the Callback Route passing the code query parameter.
// If the callback validation is successful, the frontend receives the authentication token.
// Decode the received token in the frontend using tools like react-jwt.
// If the decoded data has an actor_id property, then the user is already registered. So, use this token for subsequent authenticated requests.
// If not, follow the rest of the steps.
// The frontend uses the authentication token to create the user with their respective API route.
// For example, for customers you would use the Create Customer API route.
// For admin users, you accept an invite using the Accept Invite API route
// The frontend sends a request to the Refresh Token Route to retrieve a new token with the user information populated

    //when the user successfully logs in the following google login consent page will send 
    //a get request to the REDIRECT_URI which is your callback route
    const redirectUrl=`https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=email%20profile`;
    res.redirect(redirectUrl)
})

export default googleAuthRoute