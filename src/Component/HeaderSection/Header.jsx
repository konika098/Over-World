import {  NavLink } from "react-router-dom";


const Header = () => {
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
                        <NavLink to="/home">Home</NavLink>
                        <NavLink>Pages</NavLink>
                        <NavLink>About Us</NavLink>
                        <NavLink>Tournament</NavLink>
                        <NavLink>Shop</NavLink>
                        <NavLink>Contact</NavLink>
                        </ul>
                    </div>

                    <img className="w-[190px] h-[90px]  xl:w-[280px] xl:h-[120px]" src="../../../public/asstes/logo1.png" alt="" />

                </div>
                <div className="navbar-center hidden lg:ml-12 lg:flex">
                    <ul className="flex gap-4 xl:gap-10 text-white font-semibold text-2xl ">
                        <NavLink  to="/home">Home</NavLink>
                        <NavLink>Pages</NavLink>
                        <NavLink>About Us</NavLink>
                    
                        <NavLink>Tournament</NavLink>
                        <NavLink>Shop</NavLink>
                        <NavLink>Contact</NavLink>
                       

                   
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to="/contactUs" className="p-1 rounded  bg-purple-300 text-black border-none hover:bg-black text-base lg:text-xl lg:p-3 font-semibold hover:text-white">Sign in</NavLink>

                </div>
                </div>
            </div>
        </>
    );
};

export default Header;