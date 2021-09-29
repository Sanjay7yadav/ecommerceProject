import React,{useEffect, useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const View=() =>{

    const [product,setProduct]= useState([{
        Image:'',
            Category:'',
            product_name:'',
            product_Brand_Name:'',
            Price:'',
            Stock:'',
            Discription:''
    }])

    useEffect(()=>{
        fetch("/view").then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes=>setProduct(jsonRes));
    })

    return(
        <>
         <div className='container'>
            <h1>Item</h1>
            {product.map(pro=>
            <div>
                <h1>{pro.Image}</h1>
                <h1>{pro.Category}</h1>
                <h1>{pro.product_name}</h1>
                <h1>{pro.product_Brand_Name}</h1>
                <h1>{pro.Price}</h1>
                <h1>{pro.Stock}</h1>
                <p>{pro.Discription}</p>
            </div>)}
        </div>
        </>
    )

};
export default View;