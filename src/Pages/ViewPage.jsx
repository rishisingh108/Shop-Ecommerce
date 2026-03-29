import { useEffect, useState } from "react";
import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import { useParams } from "react-router";


const ViewPage =()=>{

    let params = useParams();
    const {productId} = params;
    const[product,setProduct] = useState({});

    const getSingleProduct = async ()=>{
        const res = await fetch(`https://dummyjson.com/products/${productId}`)
        const data = await res.json();
        setProduct(data)
    }

    useEffect(()=>{
        getSingleProduct();
    },[])

    return(
        <>
        <Header/>
        <main className="flex flex-col flex-wrap items-center min-h-screen pt-6 px-4 shadow-inner shadow-indigo-500/50  my-7 rounded-2xl">
                <div className="flex flex-col items-center shadow-xl p-5 rounded-2xl ">
                <h1>{product.title}</h1>
                <h2 className="mb-3">Images</h2>
                <div className="w-full max-w-5xl flex flex-wrap justify-center gap-4 mt-4 cursor-pointer">
                    {
                        product.images?.map((ele)=>{
                            return(
                                <img className="w-[200px] h-[200px] object-cover rounded-lg shadow-md" key={ele} src={ele}/>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="flex flex-col mt-4 p-5 gap-4 shadow-indigo-200">
                <h1> Price  : $ {product.price}</h1>
                <h1> Rating : {product.rating}</h1>
                <h1> Return policy :{product.returnPolicy}</h1>
                <h1> Min Order Quantity:{product.minimumOrderQuantity}</h1>
                </div>
        </main>
        <Footer/>
        </>
    )
}
export {ViewPage}