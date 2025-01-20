import { FaGoogle } from "react-icons/fa";

const requestGoogleLoginPage = async() => {
   
  const response=await fetch(
    `http://localhost:9000/auth/customer/google`,{
      credentials:"include",
      method:"POST"
    }
  );
  const data=await response.json()
    window.location.href=data.location

    
};

const LoginWithGoogle = () => {

  return (
    <button type="button"
      className="bg-white hover:bg-gray-100 p-2 pt-3 text-sm my-1 mb-4 rounded-md w-full"
      onClick={requestGoogleLoginPage}
    >
      <div className="inline-flex space-x-3 -space-y-1">
        <FaGoogle />
        <p>Login With Google!</p>
      </div>
    </button>
  );
};

export default LoginWithGoogle;
