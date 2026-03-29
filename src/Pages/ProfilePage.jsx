import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";
import image from "../Assets/Profile.jpg";
import { Link, useNavigate } from "react-router";

const ProfilePage = () => {
    const navigate = useNavigate();
    const Handleback = ()=>{
        navigate("/");
    }
  return (
    <>
    <Header />
    <div className="m-w-100 h-100 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl shadow-lg shadow-blue-500/50 rounded-2xl mx-auto my-11 flex flex-col items-center gap-6">
        <img src={image} alt="some-img" className="w-2/7 h-auto rounded-2xl" />
        <h1>Name:Rishi</h1>
        <h2>Id :UU123345</h2>
        <h2>Gender:Male</h2>
        <button className="bg-blue-600 rounded-2xl px-4 py-2 text-blue-50 cursor-pointer" onClick={Handleback}>Back to Home</button>
    </div>
    <Footer />
    </>
  );
};
export { ProfilePage };
