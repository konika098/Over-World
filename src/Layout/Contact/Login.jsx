import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Component/ProviderFile/AuthProvider";

const Login = () => {
    const {loginUser}=useContext(AuthContext)
    const logInNav =useNavigate()

    const handleLogin = e =>{
        e.preventDefault()
        const email =e.target.email.value
        const password =e.target.password.value

        console.log(email,password)

        loginUser(email,password)
        .then(result=>{
            console.log(result.user)
            e.target.reset()
            logInNav("/home")
            
        })
        .catch(error=>{
            console.error(error)
          })

    }
    return (
        <>
        <div  className="hero min-h-screen  bg-gradient-to-r from-pink-900 to-purple-800 backdrop-brightness-50">
                    <h1 className="text-white font-bold text-4xl">Login Here</h1>
                    <div className="card flex-shrink-0 w-full  max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-lg">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered text-white" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white text-lg">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered text-white" required />
                              
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn hover:bg-purple-500 bg-purple-700 text-white">Login</button>
                            </div>
                            <div className="form-control mt-2">
                                    <button className="btn hover:bg-purple-500 bg-purple-700 text-white">Login with Google</button>
                                
                                </div>
                        </form>
                        <div className="mb-4 ">
                        <label className="label">
                                    <a href="#" className=" text-white text-lg ml-3">Forgot password? </a>
                                    <Link to="/contact" className="text-white text-lg  mr-3">Register</Link>
                                </label>
                        </div>
                    </div>
                </div>
            
        
        </>
    );
};

export default Login;