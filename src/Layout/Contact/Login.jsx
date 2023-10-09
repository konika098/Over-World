import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Component/ProviderFile/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const {loginUser,loginGoogle}=useContext(AuthContext)
    const logInNav =useNavigate()
    const [error, setError] = useState()
    const [successfullyLogin, setSuccessfullyLogin] = useState()
    const location = useLocation();

    const handleLogin = e =>{
        e.preventDefault()
        const email =e.target.email.value
        const password =e.target.password.value

        console.log(email,password)
        setError(" ")
        setSuccessfullyLogin(" ")
    
        if (password.length < 6) {
            setError(" Password should be at least 6 characters ")
            return;
        } else if (!/[A-Z]/.test(password)) {
            setError('you should use one uppercase character.')
            return;
        } else if (!/[!@#$%^&*]/.test(password))
            setError('you should a special character')

        loginUser(email,password)
        .then(result=>{
            console.log(result.user)
            e.target.reset()
            logInNav("/")
            Swal.fire({
                icon: "success",
                title: "Sign In Successful",
                text: "You have successfully signed in!",
              });
            location.reload()
            navigate(location?.state ? location.state : '/');

            
        })
        .catch(error=>{
            console.error(error)
            Swal.fire({
                icon: "success",
                title: "Sign In Successful",
                text: "You have successfully signed in!",
              });
          })

    }
    const handleGoogle = () => {
        loginGoogle()
        .then(result=>{console.log(result.user)
          
        logInNav('/')
        Swal.fire({
            icon: "success",
            title: "Sign In Successful",
            text: "You have successfully signed in!",
          });
          location.reload()
      
          
      })
      .catch(error=>{console.error(error)
        Swal.fire({
            icon: "success",
            title: "Sign In Successful",
            text: "You have successfully signed in!",
          });
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
                                    <button onClick={handleGoogle} className="btn hover:bg-purple-500 bg-purple-700 text-white">Login with Google</button>
                                
                                </div>
                        </form>
                        {
                                error && <p className="mx-8 text-purple-400   mt-1 mb-4">{error}</p>
                            }
                            {
                                successfullyLogin && <p className="mx-8 text-green-600">{successfullyLogin}</p>
                            }
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