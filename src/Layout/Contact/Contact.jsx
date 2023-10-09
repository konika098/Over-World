import { useContext } from "react";

import { AuthContext } from "../../Component/ProviderFile/AuthProvider";
// import { Link } from "react-router-dom";




const Contact = () => {
    const {createUser} =useContext(AuthContext)
    console.log(createUser)
   
    



    const handleRegister = e =>{
        e.preventDefault()
        const email =e.target.email.value
        const name =e.target.name.value
        const password =e.target.password.value
        const number =e.target.phone.value
        const address =e.target.address.value
        console.log(email,password,number,address,name)

        createUser(email,password)
        .then(result=>{
          console.log(result.user)
        })
        .catch(error=>{
          console.error(error)
        })



    }
    return (
       <>
         <div className="text-white body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Register Here</h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <form onSubmit={handleRegister} className="flex flex-wrap -m-2">
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="name" className="leading-7 text-sm text-white">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white  rounded border  focus:border-purple-500  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white  rounded border  focus:border-purple-500  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="phone" className="leading-7 text-sm text-white">Phone Number</label>
              <input type="phone" id="phone" name="phone" className="w-full bg-white  rounded border  focus:border-purple-500  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="address" className="leading-7 text-sm text-white">Address</label>
              <input type="address" id="address" name="address" className="w-full bg-white  rounded border  focus:border-purple-500  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="pass" className="leading-7 text-sm text-white">Create Password</label>
              <input type="pass" id="pass" name="pass" className="w-full bg-white  rounded border  focus:border-purple-500  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-1/2">
            <div className="relative">
              <label htmlFor="password" className="leading-7 text-sm text-white">Confirm Password</label>
              <input type="password" id="password" name="password" className="w-full bg-white  rounded border  focus:border-purple-500  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-purple-700 border-0 py-2 px-8 focus:outline-none hover:bg-purple-700 rounded text-lg">Register</button>
          </div>
        </form>

        



        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-purple-500">overworld@gmail.com</a>
          <br />
          <span className="inline-flex mt-4">
            <a className="text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="ml-4 text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a className="ml-4 text-white">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="ml-4 text-white">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

       
       </>
    );
};

export default Contact;