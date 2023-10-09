import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Component/ProviderFile/AuthProvider";

const Login = () => {
    const {loginUser}=useContext(AuthContext)
    const handleLogin = e =>{
        e.preventDefault()
        const email =e.target.email.value
        const password =e.target.password.value

        console.log(email,password)

        loginUser(email,password)
        .then(result=>{
            console.log(result.user)
            
        })
        .catch(error=>{
            console.error(error)
          })

    }
    return (
        <>
        <div  className="hero min-h-screen  bg-gradient-to-r from-pink-900 to-purple-800 backdrop-brightness-50">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">CONTACT US AND FIND YOUR OVERWORLD</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
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
                                <label className="label">
                                    <a href="#" className=" text-white text-lg">Forgot password? </a>
                                    <Link to="/contact" className="text-white text-lg ">Register</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn hover:bg-purple-500 bg-purple-700 text-white">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        </>
    );
};

export default Login;