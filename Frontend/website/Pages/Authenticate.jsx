import { useLayoutEffect, useRef, useState } from "react"
import Login from "../src/Componet/AuthenticatePg/Login"
import SignUp from "../src/Componet/AuthenticatePg/SignUp"
import { AnimatePresence, motion } from "framer-motion"
export default function Authenticate() {
    const [page, setPage] = useState('login')

    return (
        <div className="flex flex-col h-fit w-full">
            <section className="flex justify-between items-center bg-[#292524] min-h-screen w-full">
                <AnimatePresence>
                    <motion.div
                        layout
                        layoutId={`div-${1}`}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            delay: 1 * 0.1,
                            damping: 20,
                        }}
                        className="w-full h-fit">
                        <div className="w-fit min-w-[500px] h-fit bg-[#30312E] px-2 py-5 pt-10 flex flex-col items-center rounded-2xl mx-auto shadow-[0_10px_20px_rgba(10,10,10,0.7)]">
                            <div className="w-3/4 max-w-72 min-h-18 h-18 bg-[#B6B6B6] rounded-2xl p-2">
                                <button onClick={() => { setPage('login') }} className={`${page === 'login' && 'bg-[#EBEAEA] rounded-xl shadow-gray-500 shadow-lg'} w-2/4 h-full text-center cursor-pointer font-light text-xl`}>Login</button>
                                <button onClick={() => { setPage('signup') }} className={`${page === 'signup' && 'bg-[#EBEAEA] rounded-xl shadow-gray-500 shadow-lg'} w-2/4 h-full text-center cursor-pointer font-light text-xl`}>Sign Up</button>
                            </div>
                            <div className="w-full h-auto">
                                <AnimatePresence mode="wait">
                                    {page === "login" && (
                                        <motion.div
                                            key="login"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <Login setPage={setPage} />
                                        </motion.div>
                                    )}

                                    {page === "signup" && (
                                        <motion.div
                                            key="signup"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            <SignUp setPage={setPage} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                    </motion.div>
                </AnimatePresence>
                <img src="/parnesh.png" alt="person loging in" className="w-2/6 h-dvh" />
            </section>
        </div>
    )
} 