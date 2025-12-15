import { useState } from "react"
import Login from "../src/Componet/AuthenticatePg/Login"
import SignUp from "../src/Componet/AuthenticatePg/SignUp"
export default function Authenticate() {
    const [page, setPage] = useState('login')

    return (
        <div className="flex flex-col h-fit w-full">
            <section className="flex justify-between items-center bg-[#292524] min-h-screen w-full">
                <div className="w-full h-fit">
                    <div className="w-2/4 h-fit bg-[#30312E] p-5 pt-10 flex flex-col items-center rounded-2xl mx-auto shadow-[0_10px_20px_rgba(10,10,10,0.7)]">
                        <div className="w-3/4 min-h-18 h-18 bg-[#B6B6B6] rounded-2xl p-2">
                            <button onClick={() => { setPage('login') }} className={`${page === 'login' && 'bg-[#EBEAEA] rounded-xl shadow-gray-500 shadow-lg'} w-2/4 h-full text-center cursor-pointer font-light text-xl`}>Login</button>
                            <button onClick={() => { setPage('signup') }} className={`${page === 'signup' && 'bg-[#EBEAEA] rounded-xl shadow-gray-500 shadow-lg'} w-2/4 h-full text-center cursor-pointer font-light text-xl`}>Sign Up</button>
                        </div>
                        <div className="w-full h-auto">
                            {page === 'login' && <Login page={page} setPage={setPage} />}
                            {page === 'signup' && <SignUp page={page} setPage={setPage} />}
                        </div>
                    </div>
                </div>
                <img src="/parnesh.png" alt="person loging in" className="w-2/6 h-dvh" />
            </section>
        </div>
    )
} 