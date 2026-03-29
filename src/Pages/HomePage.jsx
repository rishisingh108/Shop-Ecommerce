
import { useEffect, useRef, useState } from "react"
import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import { useNavigate } from "react-router";
import { PulseLoader } from "react-spinners";
import { ShimmerUI } from "../Components/ShimmerUI";
 import { ToastContainer, toast } from 'react-toastify';

const HomePage = ()=>{
    const limit =24;
    const toUp = useRef(null);
    const[category,setCategory] = useState([]);
    const[allProducts,setAllProducts] = useState([]);
    const[loading,setLoading] = useState(false);
    const[totalProducts,setTotalProducts] = useState(0);
    const[page,setPage] = useState(1);
    const navigate = useNavigate();

    const override = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin:"250px auto",
    };

    const getCatergories = async()=>{
        try{
            setLoading(true)
            const res = await fetch('https://dummyjson.com/products/categories');
            const data = await res.json();
            setCategory(data)
        }
        catch(err){
            alert(`Eroor Occured,R${err.message()}`)
        }
        finally{
            setTimeout(()=>{
                setLoading(false);   //Inteninally doing this to see the loader
            },1000)
        }
    }
    const getAllProducts = async()=>{
        try{
            setLoading(true);
            const skip = limit*(page-1);
            const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
            const data = await res.json();
            console.log(data);
            setTotalProducts(data.total);
            setAllProducts(data.products);
        }
        catch(err){
            alert( `Error occured while loading the data${err.message}`);
        }
        finally{
                setTimeout(()=>{
                    setLoading(false);
                },1000)
            }
        }
    
        const handleSkip = (idx)=>{
            setPage(idx);
            toUp.current?.scrollIntoView({ behavior: "smooth" });
            toast.success('Page Changed Successfully', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                    });
        }

    const handleclickfromHome =(id)=>{
        navigate(`/${id}/view`)
    }
    const handleOpenCategory = (slug)=>{
        navigate(`/category/${slug}`)
    }
    useEffect(()=>{
        getAllProducts();
    },[page])
                                        //do bar api call na ho islye do lag useEffect bnaya hai
    useEffect(()=>{
        getCatergories(); 
    },[]);

    const totalpages = Math.ceil(totalProducts/limit);
    const arrayForPagination = Array(totalpages).fill("hi");
    
    return(
        <>
        {/* <div className="flex flex-col min-h-screen"> */}
        <div ref={toUp}></div>
        <Header/>
            {/* <h2 className="m-auto text-blue-700 text-2xl">Search By Categories</h2>
            {
                loading ? <div><PulseLoader color="blue" cssOverride={override} /></div> 
                : <main className="flex-grow grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
            {
                category.map((ele,idx)=>{
                    return(
                        <div onClick={()=>{handleOpenCategory(ele.slug)}} className="bg-blue-100 p-4 rounded shadow cursor-pointer " key={idx}>
                            <h1>{ele.name}</h1>
                        </div>
                    )
                })
            }
        </main>
            } */}
            {
                loading ? <div><ShimmerUI/></div>
                : <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 p-5"> 
                <div>
                    <h2 className="text-center font-bold text-2xl mb-6">Categories</h2> 
                    <main className=" flex flex-col  gap-3">
                        {
                            category.map((ele,idx)=>{
                                return(
                                    <div onClick={()=>{handleOpenCategory(ele.slug)}} className="bg-blue-100 p-4 rounded shadow cursor-pointer" key={idx}>
                                        <h1>{ele.name}</h1>
                                    </div>
                                )
                            })
                        }
                    </main>
                </div>
                <div >
                    <h2 className="text-center font-bold text-2xl">All Products</h2>
                        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10">
                        {
                            allProducts.map((ele,idx)=>{
                                return(
                                    <div onClick={()=>{handleclickfromHome(ele.id)}} key={idx} className="max-w-50 max-h-70 shadow-lg shadow-grey-500/50 rounded-2xl px-3 cursor-pointer">
                                        <p>{ele.brand}</p>
                                        <img src={ele.thumbnail}/>
                                        <p>Price :${ele.price}</p>
                                        <p>Stock:{ele.stock}</p>
                                    </div>
                                )
                            })
                        }
                    </main>
                    
                </div>
            </div>
            }
                <div className=" flex justify-center p-3 border-t border-gray-300 gap-3 ">
                    {
                        arrayForPagination.map((ele,idx)=>{
                            return(
                            <button  key={idx} className="bg-blue-500 p-3 text-amber-50 rounded-[10px] cursor-pointer" onClick={()=>{handleSkip(idx+1)}} >{idx+1}</button>
                        )})
                    }
                </div>
                <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"/>
        <Footer/>
        </>
    )
}

export {HomePage}