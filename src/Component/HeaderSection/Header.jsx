import { useContext } from "react";
import {  Link, NavLink } from "react-router-dom";
import { AuthContext } from "../ProviderFile/AuthProvider";


const Header = () => { 
    const {user,logOut} =useContext(AuthContext)

    const handleLogOut =()=>{
        logOut()
        .then(()=>console.log("successfully log out"))
        .catch(error=>console.error(error))
    }
    return (
        <>
            <div className="w-full  bg-[url('https://i.ibb.co/wgMCXTZ/bg.jpg')] bg-cover bg-center" 
           
             >
                <div className="navbar  backdrop-brightness-90">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-400 text-center text-lg text-white rounded-box w-52">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/page">Pages</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                        <NavLink to="/tournament">Tournament</NavLink>
                        <NavLink to="/shop">Shop</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        </ul>
                    </div>

                    <img className="w-[190px] h-[90px]  xl:w-[280px] xl:h-[120px]" src="../../../public/asstes/logo1.png" alt="" />

                </div>
                <div className="navbar-center hidden lg:ml-10 lg:flex">
                    <ul className="flex gap-4 xl:gap-10 text-white font-semibold text-2xl ">
                        <NavLink  to="/">Home</NavLink>
                        <NavLink to="/page">Pages</NavLink>
                        <NavLink to="/about">About Us</NavLink>
                    
                        <NavLink to="/tournament">Tournament</NavLink>
                        <NavLink to="/shop">Shop</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                       

                   
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {
                        user? "":<>
                        <Link to="/register">
                        <button  className="p-1 rounded  bg-purple-300 text-black border-none hover:bg-black text-base lg:text-xl lg:p-3 font-semibold hover:text-white">Register</button>
                        </Link>
                         
                        
                        
                        <Link to="/login">
                         <button  className="p-1 rounded  bg-purple-300 text-black border-none hover:bg-black text-base lg:text-xl lg:p-3 font-semibold hover:text-white">Login</button>
                        </Link>
                        </>
                    } 
                    <div className="flex items-center gap-1">
                    {
                        user && <span className="text-white hidden md:hidden md:text-lg">{user.displayName}</span>
                    }
                    {
                        user ? <img className="rounded-full w-9 md:w-16" src={user.photoURL} alt="" />:""
                    }
                     {
                        user ? 
                        <button onClick={handleLogOut} className="p-1 rounded  bg-purple-300 text-black border-none hover:bg-black text-sm md:text-base lg:text-xl lg:p-3 font-semibold hover:text-white">Sign Out</button>
                        :" "
                     }
                    </div>
                   

                </div>
                </div>
            </div>
        </>
    );
};

export default Header;