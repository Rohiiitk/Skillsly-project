import { useState } from "react"
import Inputs from "../Inputs/Inputs";
import { useNavigate } from "react-router-dom";
export default function Login({ page, setPage }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    const navigate = useNavigate();

    // const handleLogin = async (e) => {
    //     e.preventDefault();
    //     if (!validateEmail(email)) {
    //         setError("Enter Valid Email")
    //         return
    //     }

    //     if (!password) {
    //         setError("Enter Valid Password")
    //         return
    //     }
    //     setError("")
    // }

    return (
        <div className="flex flex-col items-center mt-2 gap-3 py-5">
            <div className="flex mx-auto items-start">
                <p className="font-medium text-3xl text-transparent bg-clip-text bg-[radial-gradient(circle,_#4DDCB7_0%,_#B8FB70_100%)]">Welcome Back!</p>
            </div>
            <div className="flex flex-col w-full items-center px-15">
                <form className="w-full my-4 flex items-start text-white flex-col gap-5">
                    <div className="w-full flex flex-col gap-1">
                        <label>Email :</label>
                        <Inputs type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="ex: Test@gmail.com " />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <label>Password :</label>
                        <Inputs type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="ex: @12345 " />
                    </div>
                    {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}
                    <button type="submit" className="bg-[#5B9944] font-medium to-orange-500 rounded-xl px-10 cursor-pointer text-white text-lg p-2 w-full mt-5" onClick={() => navigate('/dashboard')}>Log In</button>
                    <p className="text-sm">Don't have an account? <span className="text-[#5B9944] underline cursor-pointer" onClick={() => setPage('signup')}>Sign Up</span></p>
                </form>
            </div>

        </div>
    )
} 