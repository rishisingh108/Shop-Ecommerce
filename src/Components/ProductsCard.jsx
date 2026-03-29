import { Link, useNavigate } from "react-router";

const ProductsCard = (props) =>{
    const{brand,thumbnail,price,stock,id} = props; 

    const navigate = useNavigate();

    const HandleViewPage =()=>{
        navigate(`/${id}/view`)
    }
    return(
        <>
        <div onClick={HandleViewPage} className="max-w-50 max-h-70 shadow-lg shadow-grey-500/50 rounded-2xl px-3">
        <p>{brand}</p>
        <img src={thumbnail}/>
        <p >Price :{price}</p>
        <p>Stock:{stock}</p>
        </div>
        </>
    )
}

export{ProductsCard}