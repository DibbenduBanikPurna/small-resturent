import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Price.css'
const Price = ({info}) => {
 
   const [count,setCount]=useState(1800)
   const total=info.reduce((sum,cart)=>sum+cart.price,0)
   const [click,setClick]=useState(false)
 
   

   useEffect(()=>{
        
    setTimeout(() => setCount(count - 1), 1000);
       
      
   },)

    
  


    const HandleClick=()=>{
       
        
        alert("your food is prepared in 30 min")
        setClick(true)
     
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto mt-5">
                {

      info.map((info,index)=>{
      return <div key={index} className="d-flex price mt-5">
          <div>
        <img  src={require(`../../images/${info.image}`).default} alt=""/>
        </div>
        <div>
        <h5>Item:{info.name}</h5>
        <span style={{float:'right'}}>Price:{info.price}</span>
        
        </div>
    </div>
     })
}
                </div>
                <div className="col-md-4 mt-5 pt-5">
                <h5>Total Price:{total}</h5>
                <h5>Total Items:{info.length}</h5>
            <button className="btn btn-danger" onClick={HandleClick}>Order Now</button>
            <br/>
           {click ?  <p className="text-primary mt-3">Your Order is Prepared In:{count}</p> : ''}
           
        <Link to="/"> <button className="btn btn-warning mt-2" >Back To Home</button></Link>  
                </div>
            </div>
          
        </div>
    );
};

export default Price;