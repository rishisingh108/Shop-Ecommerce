import { VscWarning } from "react-icons/vsc";
import { Link } from "react-router";
const NotFoudPage = ()=>{
    return(
        <>
        <div className="flex  justify-center items-center mt-10">
        <VscWarning className=" w-20 h-20 "/>
        <p>Ooops... Page Not Found 404</p>
        </div>
        <div className="flex justify-center mt-6 items-center">
        <Link className="p-2  bg-amber-300 " to="/">Back to Home</Link>
        </div>
        </>
    )
}
export{NotFoudPage}