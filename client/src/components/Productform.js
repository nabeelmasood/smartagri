import {useState} from  "react"
import { useProductsContext } from "../hooks/useProductsContext"



const ProductFrom =()=>{
    const {dispatch} = useProductsContext()
    const [Title,setTitle]= useState('')
    const [Price,setPrice]= useState('')
    const [Description,setDescription]= useState('')
    const [error,seterror]= useState(null)
    
    const handleSubmit =async (e)=>{
        e.preventDefault()
        console.log(Title,Price,Description)
        const product={Title, Price, Description}

        const response = await fetch('/api/products',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(product)
        })
        const json = await response.json()
        if(!response.ok){
            seterror(json.error)
        }
        if(response.ok){
            setTitle('')
            setPrice('')
            setDescription('')
            seterror(null)
            console.log('New Product Added',json)
            dispatch({
                type:'CREATE_PRODUCT',
                payload:json
            })
        }
    }


    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Product</h3>
            <label>Product Name: </label>
            <input 
                type="text" 
                value={Title} 
                onChange={(e)=>setTitle(e.target.value)}
            />
            <label>Product Price: </label>
            <input 
                type="number" 
                value={Price} 
                onChange={(e)=>setPrice(e.target.value)}
            />
            <label>Product Description: </label>
            <input 
                type="text" 
                value={Description} 
                onChange={(e)=>setDescription(e.target.value)}
            />
            <button>Add Product</button>
            {error && <div className="error">{error}</div>}
        </form>
        
    )
}
export default ProductFrom