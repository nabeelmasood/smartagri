import { useProductsContext } from "../hooks/useProductsContext"



const Productdetails = ({product})=>{
    
    const {dispatch} = useProductsContext()
    
    const handleClick = async()=>{
        const response = await fetch('/api/products/'+product._id,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json = await response.json()
        
        if(response.ok) {
            console.log("Deleted",json)
            dispatch({
                type:'DELETE_PRODUCT',
                payload:json
            })
        }
    }
    
    return(
        <div className="product-details">
            <h4>Product Details</h4>
            <p>Name: {product.Title}</p>
            <p>Price: {product.Price}</p>
            <p>Description: {product.Description}</p>
            <p>{product.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    
    )

}
export default Productdetails;