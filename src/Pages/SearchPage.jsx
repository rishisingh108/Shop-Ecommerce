import { useEffect, useState } from "react";
import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import { useSearchParams } from "react-router";
import { ProductsCard } from "../Components/ProductsCard";
import { PulseLoader } from "react-spinners";


   const override = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin:"250px auto",
    };

const SearchPage =()=>{
    
    const[products,setProducts] = useState([]);
    const[loading,setLoading] = useState(false);

    const[searchParams] = useSearchParams();
    const searchText = searchParams.get("text");


    const getData = async()=>{
        try{
            setLoading(true);
            const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
            const data = await res.json();
            setProducts(data.products);
        }
        catch(err){
            alert(`error occure ${err.message}`)
        }
        finally{
            setTimeout(()=>{
                setLoading(false)
            },1000)
        }
    }
    useEffect(()=>{
        getData();
    },[searchText])

    return (
        <>
        <div className="flex flex-col min-h-screen">
        <Header/>
        {
            loading ? <div><PulseLoader color="blue" cssOverride={override}/></div> 
            :
            <main className=" flex flex-grow flex-col">
                {
                    !loading && products.length == 0 ? <div className="text-blue-700 m-auto p-1 text-3xl">Product Not Found ! Sorry</div> : <h2 className="text-blue-700 m-auto p-1 text-3xl">Products Found</h2>
                }
            <div className="flex flex-wrap gap-7 my-10 ml-6 cursor-pointer">
                {
                    products.map((ele,idx)=>{
                        return(
                            <div key={idx}>
                                <ProductsCard  {...ele}/>
                            </div>
                        )
                    })
                }
            </div>
        </main>
        }
        <Footer/>
        </div>
        </>
    )
}
export {SearchPage}