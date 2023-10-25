import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';



const Registration = () => {

    const { createUser, googleLogin } = useContext(AuthContext)
    const [passwordError, setPasswordError] = useState('');
    const [createSuccess, setCreateSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const registrationHandle = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        setPasswordError('')
        if (password.length < 6) {
            setPasswordError('At least 6 or more characters Please');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setPasswordError('password most be one uppercase characters');
            return;
        }
        else if (!/[!@#$%^&*]/.test(password)) {
            setPasswordError('At least one special characters');
            return;
        }
        createUser(email, password)
            .then(res => {
                console.log(res.user)
                setCreateSuccess('Registration SuccessFully');
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        Swal.fire(
                            'Thank You',
                            'Registration Successfully please log in',
                            'success'
                        )
                        form.reset()
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
    const googleLoginHandle = () => {
        googleLogin()
            .then(response => {
                navigate(location.state ? location?.state : '/')
                console.log(response.user)
            })
            .catch(error => {
                console.log(error)
                setPasswordError(error.message)
            })
    }

    return (
        <div className="mx-5 lg:mx-0">
            <div className="max-w-lg mx-auto border-4 p-10 my-5 bg-gradient-to-r from-orange-100 to-orange-300">
                <div className="relative mx-auto flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <h4 className="block font-sans text-4xl font-bold leading-snug tracking-normal text-blue-gray-900 antialiased text-center">
                        Register
                    </h4>
                    <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased text-center">
                        Enter your details to Register
                    </p>
                    <form onSubmit={registrationHandle} className="mt-8 mb-2 w-80 max-w-screen-lg mx-auto sm:w-96">
                        <div className="mb-4 flex flex-col gap-6">
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input name="name" type="text" required
                                    className="bg-gradient-to-r from-blue-300 to-blue-100 peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="behtmlFore:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all behtmlFore:pointer-events-none behtmlFore:mt-[6.5px] behtmlFore:mr-1 behtmlFore:box-border behtmlFore:block behtmlFore:h-1.5 behtmlFore:w-2.5 behtmlFore:rounded-tl-md behtmlFore:border-t behtmlFore:border-l behtmlFore:border-blue-gray-200 behtmlFore:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:behtmlFore:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:behtmlFore:border-t-2 peer-focus:behtmlFore:border-l-2 peer-focus:behtmlFore:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:behtmlFore:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Name
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input name="photo" type="text"
                                    className="bg-gradient-to-r from-blue-300 to-blue-100 peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="behtmlFore:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all behtmlFore:pointer-events-none behtmlFore:mt-[6.5px] behtmlFore:mr-1 behtmlFore:box-border behtmlFore:block behtmlFore:h-1.5 behtmlFore:w-2.5 behtmlFore:rounded-tl-md behtmlFore:border-t behtmlFore:border-l behtmlFore:border-blue-gray-200 behtmlFore:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:behtmlFore:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:behtmlFore:border-t-2 peer-focus:behtmlFore:border-l-2 peer-focus:behtmlFore:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:behtmlFore:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Photo URL
                                </label>
                            </div>

                            <div className="relative h-11 w-full min-w-[200px]">
                                <input name="email" type="email" required
                                    className="bg-gradient-to-r from-blue-300 to-blue-100 peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="behtmlFore:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all behtmlFore:pointer-events-none behtmlFore:mt-[6.5px] behtmlFore:mr-1 behtmlFore:box-border behtmlFore:block behtmlFore:h-1.5 behtmlFore:w-2.5 behtmlFore:rounded-tl-md behtmlFore:border-t behtmlFore:border-l behtmlFore:border-blue-gray-200 behtmlFore:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:behtmlFore:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:behtmlFore:border-t-2 peer-focus:behtmlFore:border-l-2 peer-focus:behtmlFore:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:behtmlFore:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Email
                                </label>
                            </div>
                            <div className="relative h-11 w-full min-w-[200px]">
                                <input name="password"
                                    type={showPassword ? 'text' : 'password'} required
                                    className="bg-gradient-to-r from-blue-300 to-blue-100 peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label className="behtmlFore:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all behtmlFore:pointer-events-none behtmlFore:mt-[6.5px] behtmlFore:mr-1 behtmlFore:box-border behtmlFore:block behtmlFore:h-1.5 behtmlFore:w-2.5 behtmlFore:rounded-tl-md behtmlFore:border-t behtmlFore:border-l behtmlFore:border-blue-gray-200 behtmlFore:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:behtmlFore:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:behtmlFore:border-t-2 peer-focus:behtmlFore:border-l-2 peer-focus:behtmlFore:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:behtmlFore:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                    Password
                                </label>
                            </div>
                            <h2 className="cursor-pointer text-2xl absolute mt-[215px] lg:mt-[215px] ml-72 md:ml-[350px] md:mt-[215px] lg:ml-[345px]" onClick={()=> setShowPassword(!showPassword)}>{showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>}</h2>
                        </div>
                        <div className="inline-flex items-center">
                            <label
                                className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                                htmlFor="checkbox"
                                data-ripple-dark="true"
                            >
                                <input
                                    type="checkbox"
                                    className="bg-slate-300 behtmlFore:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all behtmlFore:absolute behtmlFore:top-2/4 behtmlFore:left-2/4 behtmlFore:block behtmlFore:h-12 behtmlFore:w-12 behtmlFore:-translate-y-2/4 behtmlFore:-translate-x-2/4 behtmlFore:rounded-full behtmlFore:bg-blue-gray-500 behtmlFore:opacity-0 behtmlFore:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:behtmlFore:bg-pink-500 hover:behtmlFore:opacity-10"
                                    id="checkbox"
                                />
                                <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-3.5 w-3.5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </span>
                            </label>
                            <label
                                className="mt-px cursor-pointer select-none font-light text-gray-700"
                                htmlFor="checkbox"
                            >
                                <p className="flex items-center font-sans text-sm font-normal leading-normal text-gray-700 antialiased">
                                    I agree the
                                    <a
                                        className="font-medium transition-colors hover:text-pink-500"
                                        href="#"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                </p>
                            </label>
                        </div>
                        {
                            passwordError && <p className="text-red-800 text-lg font-medium text-center">{passwordError}</p>
                        }
                        {
                            createSuccess && <p className="text-green-700 text-lg font-medium text-center">{createSuccess}</p>
                        }
                        <button
                            className="mt-6 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Register
                        </button>
                        <button onClick={googleLoginHandle}
                            className="mt-6 block w-full select-none rounded-lg bg-gray-700 py-3 px-6 text-center align-middle font-sans text-lg font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                            data-ripple-light="true"
                        >
                            Google Login
                        </button>
                        <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            Already have an account?
                            <Link to={'/login'}><button className="font-bold text-pink-500 text-xl ml-2 transition-colors hover:text-blue-700">Log In</button></Link>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;