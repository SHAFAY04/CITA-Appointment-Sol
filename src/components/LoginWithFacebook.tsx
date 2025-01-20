import { useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const LoginWithFacebook = () => {
  const requestFacebookLoginPage = async () => {
   
    const response=await fetch(
      `http://localhost:9000/auth/customer/facebook`,{
        credentials:"include",
        method:"POST"
      }
    );
    const result=await response.json()
    if (result.location) {
      // redirect to Google for authentication
      window.location.href = result.location

      return
    }
  }  

  const [searchParams]=useSearchParams()
 
  const sendCallback = async (code:string) => {
    const data= await fetch(
      `http://localhost:9000/auth/customer/facebook/callback?code=${code}`, 
      {
        credentials: "include",
        method: "POST",
      }
    ).then((res) => res.json())

    console.log(data)
  }


  useEffect(()=>{

    const code =  searchParams.get("code")
    console.log(code)

    if(code){
      sendCallback(code)
    }

  },[searchParams])

  return (
    <button
      type="button"
      className="bg-white hover:bg-gray-100 p-2 pt-3 text-sm my-1 mb-4 rounded-md w-full"
      onClick={requestFacebookLoginPage}
    >
      <div className="inline-flex space-x-3 -space-y-1">
        <FaFacebook />
        <p>Login With Facebook!</p>
      </div>
    </button>
  );
};

export default LoginWithFacebook;
