import { FaRegCopyright } from "react-icons/fa";

const Footer = ()=>{
    return(
        <>
        <div className="flex flex-row justify-center p-6 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400">
            <h2>All Rights Reserved ..</h2>
            <FaRegCopyright className="h-1/3 pt-1 "/>
        </div>
        </>
    )
}
export {Footer}