import { useState } from "react";
import { IoCart } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { FaCircleUser } from "react-icons/fa6";
import { useSearchParams } from "react-router";

const Header = () => {
    const[searchParams] = useSearchParams();

    const [searchText, setSearchtext] = useState(searchParams.get("text")|| "");
    const navigate = useNavigate();

    const HandleClick = () => {
    navigate(`/search?text=${searchText}`);
    };

    const HandleProfile = ()=>{
        navigate("/profile")
    }

    return (
        <div className=" sticky top-0 right-0 left-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 p-4 flex flex-col md:flex-row items-center justify-between gap-4 text-white ">

    <Link to ="/" className="text-amber-300 font-bold text-3xl">ShopZone</Link>

        <div className="flex flex-col sm:flex-row items-center gap-2">
        <input
        value={searchText}
        onChange={(e) => setSearchtext(e.target.value)}
        className="border border-blue-100 shadow-md p-2.5 rounded-md bg-white/90 text-blue-800 placeholder:text-blue-500 w-64"
        type="text"
        placeholder="Search here..."/>
        <button
        onClick={HandleClick}
        className="bg-white text-blue-800 px-4 py-2 rounded shadow hover:bg-blue-100 transition">Search</button>
        </div>

        <div className="flex items-center gap-4 flex-wrap justify-center">
        <h2 className="font-medium hover:underline cursor-pointer">Become a seller</h2>

        <div onClick={HandleProfile} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow cursor-pointer hover:scale-105 transition">
        <FaCircleUser className="h-6 w-6" />
        <span className="font-semibold">Profile</span>
        </div>

        </div>

        </div>
);
};

export { Header };
