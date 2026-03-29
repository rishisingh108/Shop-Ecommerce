import { useEffect, useState } from "react";
import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import { useNavigate, useParams } from "react-router";

const ViewCategory =()=>{
    const[categoryProducts,setCategoryProducts] = useState([]);
    const navigate = useNavigate();

    const handleFromCategoryPage = (id)=>{
        navigate(`/${id}/view`);
    }
    const{slug} = useParams();

    const getCatergories = async()=>{
            const res = await fetch(`https://dummyjson.com/products/category/${slug}`);
            const data = await res.json();
            console.log(data);
            setCategoryProducts(data.products);
        }
        useEffect(()=>{
            getCatergories();
        },[])

    return(
        <>
        <div className="flex flex-col min-h-screen">
        <Header/>
        <main className="flex-grow">
            <h2 className=" text-center text-2xl text-blue-600">Items </h2>
            <div className="flex flex-row flex-wrap gap-15 justify-center mt-9">
                {
                    categoryProducts.map((ele,idx)=>{
                    return(
                <div onClick={()=>{handleFromCategoryPage(ele.id)}}  key={idx} className="max-w-50 max-h-70 shadow-lg shadow-grey-500/50 rounded-2xl px-3 cursor-pointer" >
                    <p>{ele.brand}</p>
                    <img src={ele.thumbnail}/>
                    <p>Price :${ele.price}</p>
                    <p>Stock:{ele.stock}</p>
                </div>
                        )
                    })
                }
            </div>
        </main>
        <Footer/>
        </div>
        </>
    )
}
export {ViewCategory}