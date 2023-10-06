import {  NavLink } from "react-router-dom";


const Header = () => {
    return (
        <>
            <div className='navbar bg-cover w-full   ' style={{ 
            backgroundImage: `url("https://i.ibb.co/wgMCXTZ/bg.jpg")`,
           
          }} >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-purple-400 text-center text-lg text-white rounded-box w-52">
                        <NavLink to="/home">Home</NavLink>
                        <NavLink>Pages</NavLink>
                        <NavLink>About Us</NavLink>
                        <NavLink>Tournament</NavLink>
                        <NavLink>Shop</NavLink>
                        <NavLink>Contact</NavLink>
                        </ul>
                    </div>

                    <img className="w-[270px]  h-[90px] lg:w-[280px] lg:h-[120px]" src="../../../public/asstes/logo1.png" alt="" />

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-10 text-white font-semibold text-2xl ">
                        <NavLink  to="/home">Home</NavLink>
                        <NavLink>Pages</NavLink>
                        <NavLink>About Us</NavLink>
                    
                        <NavLink>Tournament</NavLink>
                        <NavLink>Shop</NavLink>
                        <NavLink>Contact</NavLink>
                            {/* <li >
                            <details>
                               
                                <summary></summary>
                                <ul className="p-4 text-white mt-4  w-44 bg-black text-center" >
                                    <li><NavLink to="">Our Team</NavLink></li>
                                    <li><NavLink to="">Player Details</NavLink></li>
                                   </ul>
                            </details>
                        </li> */}

                   
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to="/contactUs" className="p-1 rounded  bg-purple-300 text-black border-none hover:bg-black text-base lg:text-xl lg:p-3 font-semibold hover:text-white">Sign in</NavLink>

                </div>
            </div>
        </>
    );
};

export default Header;