import React, { useContext, useState } from 'react';

import { userContext } from '../../App';
import { Menu } from '../Data/Data';
import Cart from './Cart/Cart';
import MenuDetail from './MenuDetail';

 const allCat=[...new Set(Menu.map(currCat=>{
     return currCat.category
 })), "all"]
 



const Gallery = () => {
    const [cat]=useState(allCat)
    const [menu,setMenu]=useState(Menu)
    const [items,setItems]=useState([])
    const [cart,setCart]=useState([])
   const [info,setInfo]=useContext(userContext)
   console.log(info)
    
    const filter=(category)=>{
        if(category==="all"){
            setMenu(Menu)
            return;
        }
        const currItem=Menu.filter((current=>{
            return current.category===category
        }))
        setMenu(currItem)
    }

    const handleClick=(item)=>{
        //console.log(item)
        const newItem=[...items,
        item]
        setItems(newItem)
    }
    const handleCart=(carts)=>{
        //console.log(cart)
        const newItem=[...cart,
        carts]
            setCart(newItem)
            setInfo(newItem)
    }
    return (
        <div className="container">
             <h1>My Small Resturent</h1>
      <hr/>
            <div className="row pt-5">
            <div className="col-md-5 m-auto">
            <div className=" d-flex justify-content-between">
              {cat.map((cat,index)=>{
                  return <button key={index} onClick={()=>filter(cat)} className="btn btn-warning">{cat}</button>
              })}
           
            </div>
            </div>
            <div className="col-md-2">
                <Cart items={items} handleCart={handleCart} />
            </div>
            </div>
            <div className="row">
                {
                    menu.map((menu)=>{
                        return <MenuDetail  handleClick={handleClick}  key={menu.id} menu={menu}/>
                    })
                }
            </div>
        </div>
    );
};

export default Gallery;