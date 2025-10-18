import { useState } from "react"
import Login from "../src/Componet/Login"
import SignUp from "../src/Componet/SignUp"
export default function Authenticate() {
    const [page, setPage] = useState('login')

    return (
        <div className="flex flex-col min-h-screen w-full">
            <section className="flex justify-between items-center bg-[#292524] min-h-screen w-full">
                <div className="w-full h-full">
                    <div className="w-2/4 h-[600px] bg-[#30312E] p-5 py-10 flex flex-col items-center rounded-2xl mx-auto shadow-[0_10px_20px_rgba(10,10,10,0.7)]">
                        <div className="w-3/4 h-1/9 bg-[#B6B6B6] rounded-2xl p-2">
                            <button onClick={() => { setPage('login') }} className={`${page === 'login' && 'bg-[#EBEAEA] rounded-xl shadow-2xl'} w-2/4 h-full text-center cursor-pointer font-light text-xl`}>Login</button>
                            <button onClick={() => { setPage('signup') }} className={`${page === 'signup' && 'bg-[#EBEAEA] rounded-xl shadow-2xl'} w-2/4 h-full text-center cursor-pointer font-light text-xl`}>Sign Up</button>
                        </div>
                        <div className="w-full h-auto">
                            {page === 'login' && <Login page={page} setPage={setPage} />}
                            {page === 'signup' && <SignUp />}
                        </div>

                    </div>
                </div>
                <img src="/parnesh.png" alt="person loging in" className="w-2/6 h-full" />
            </section>
        </div>
    )
} 