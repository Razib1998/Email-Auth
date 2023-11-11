import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firsebase/firebase.config";
import { AiOutlineEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";



const Register = () => {

  const [registerError, setRegisterError] = useState('')
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false)

        const handleSubmit = e => {
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          console.log(email, password);

          // Clear the error
          setRegisterError("");
          setSuccess("");

          if (password.length < 6) {
            setRegisterError(
              "Password should be at least 6 characters or longer"
            );
            return;
          }
          else if(!/[A-Z]/.test(password)){
            setRegisterError('Your password must have at least one upper case character')
            return;
          }

          //  Create User
          createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
              console.log(result.user);
              setSuccess("You have successfully create an account");
            })
            .catch((error) => {
              console.error(error);
              setRegisterError(error.message);
            });
        }
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Register Now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                    <span onClick={()=>setShowPassword(!showPassword)} className="text-2xl absolute ml-72 mt-20">
                      {
                        showPassword ? <AiFillEyeInvisible></AiFillEyeInvisible> :
                        <AiOutlineEye></AiOutlineEye>
                      }
                    </span>
                  </label>

                  <input
                    type={ showPassword ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    className="input input-bordered static"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                {registerError && (
                  <p className="text-2xl text-red-900">{registerError}</p>
                )}
                ,
                {success && (
                  <div>
                    <h2 className="text-2xl text-green-800">{success}</h2>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;