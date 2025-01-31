import logo from "../assets/images/cita.jpg";
import { NavLink } from 'react-router-dom';
// import medic from '../assets/images/medicAnimated-removebg-preview.png';

const Hero = () => {
  interface LinkClassProps {
    isActive: boolean;
  }
  const linkClass = ({ isActive }: LinkClassProps) =>
    isActive
      ? 'h-7 text-sm font-bold pt-1 px-4 font-poppins bg-cyan-50 rounded-2xl '
      : 'h-7 text-sm font-bold pt-1 px-4 font-poppins hover:bg-cyan-50 rounded-2xl ';

  return (
    <>
      {/* <!-- Hero --> */}
      <div className="bg-customBlue flex flex-col items-center h-[620px]">
        {/* Navigation Container */}
        <div className="flex justify-between w-full max-w-5xl pt-20">
          {/* Logo */}
          <img className="h-32 w-60" src={logo} alt="image here" />

          {/* Navigation Items */}
          <div className="flex space-x-6 mt-6">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/pricing" className={linkClass}>
              Pricing
            </NavLink>
            <NavLink to="/support" className={linkClass}>
              Support
            </NavLink>
            <NavLink to="/login" className={linkClass}>
              LogIn
            </NavLink>
          </div>
        </div>

        {/* Gradient Section */}
        <div className="bg-gradient-to-r from-cyan-50 to-customBlue h-[1000px] w-full  mt-[400px]  " >
        </div>
      </div>
    </>
  );
};

export default Hero;
