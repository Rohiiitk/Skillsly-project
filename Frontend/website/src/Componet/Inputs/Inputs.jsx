import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";


export default function Inputs({
    onChange,
    value,
    placeholder,
    type
}) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleEye = () => {
        setShowPassword(!showPassword);
    }
    return (
        <div tabIndex={0} className="outline-none w-full h-auto px-5 p-3 flex text-black justify-between bg-slate-200 rounded-lg">
            <input type={type === 'email' ? 'email' : (showPassword ? 'text' : 'password')} placeholder={placeholder} value={value} onChange={onChange} className="w-full outline-none" />
            {type === 'password' && (<button className="cursor-pointer text-black" onClick={toggleEye}>{showPassword ? <Eye /> : <EyeClosed />}</button>)}

        </div>
    )
}