import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import { Link } from 'react-router-dom';
const Cart = ({items,handleCart}) => {
   
   const total=items.reduce((sum,cart)=>sum+cart.price,0)
   //console.log(total)
    return (
        <div>
 
    <Link to="/cart/detail"><FontAwesomeIcon onClick={()=>handleCart(items)} className="text-warning" style={{fontSize:'40px',marginTop:'15px'}} icon={faCartPlus} ></FontAwesomeIcon>  <span className="carts">{items.length}</span></Link> 
            <h5 className="hi" >Total Price:{total}</h5>
        </div>
    );
};

export default Cart;