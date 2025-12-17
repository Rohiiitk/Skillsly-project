import { SquareUserRound, Trash, Upload, UserRound } from "lucide-react";
import React, { useRef, useState } from "react";

const ProfilePicSelector = ({ image, setImage, preview, setPreview }) => {
    const inputRef = useRef(null)
    const [previewUrl, setPreviewUrl] = useState(null)
    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImage(file)

            const preview = URL.createObjectURL(file)
            if (setPreview) {
                setPreview(preview)
            }
            setPreviewUrl(preview)

        }
    }
    const handleRemoveImage = () => {
        setImage(null)
        setPreviewUrl(null)
    }

    const onChooseFile = () => {
        inputRef.current.click();
    }

    return (
        <>
            <div>
                <input type="file" accept="image/*" ref={inputRef} onChange={handleImageChange} className="flex flex-col justify-center items-center mx-auto opacity-0" />
                {!image ?
                    (
                        <div className="flex mx-auto justify-center flex-col items-center bg-black text-gray-200 border border-white hover:border hover:border-green-400 w-24 h-24 rounded-full">
                            <SquareUserRound className="absolute text-5xl cursor-pointer" />
                            <button type='button' onClick={onChooseFile} className="bg-green-600 hover:bg-green-300 hover:text-black text-white cursor-pointer right-0 p-2 mt-18 ml-14 rounded-full"><Upload /></button>
                        </div>
                    ) :
                    (
                        <div className="flex mx-auto justify-center flex-col items-center -my-5 w-34 h-34 rounded-full">
                            <img src={preview || previewUrl} alt="profile photo" className="w-24 h-24 object-cover rounded-full" />
                            <button className="cursor-pointer p-2 bg-green-600 hover:bg-red-600 text-white rounded-full flex justify-center -mt-5 ml-15 items-center" type="button" onClick={handleRemoveImage}><Trash /></button>
                        </div>
                    )
                }
            </div>
        </>
    )
}
export default ProfilePicSelector;