import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';

import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { signIn, providerLogin } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('user Loged in Successfully')
            }).catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            })
    }
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            }).catch(error => console.log(error))
    }
    return (
        <div className='h-[800px] flex justify-center items-center p-4 '>
            <div className='w-96 p-7 bg-base-300 rounded-lg border-double border-sky-500 '>
                <h2 className='text-4xl text-center font-semibold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type='email' {...register("email", { required: "Email is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-700 text-xl'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type='password' {...register("password", { required: "Password is required", minLength: { value: 6, message: "password must be 6 characters" } })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-700 text-xl'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password</span>
                        </label>
                    </div>
                    <input className='btn btn-primary w-full' value='Login' type="submit" />
                    <div>
                        {loginError && <p className='text-red-700'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Carway Service? <Link className='text-secondary' to='/signup'>SignUp</Link></p>
                <div className='divider'>OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full' >CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;