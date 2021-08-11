import React from 'react';
import './Menu.css'
const GalleryDetail = ({menu,handleClick}) => {
   
    return (
        <div className="col-md-6">
            <div className="card mt-5 ">
                
                <div className="d-flex">
                    <div>
                    <img style={{height:'180px'}} className="img-fluid" src={require(`../../images/${menu.image}`).default} alt={menu.name}/>
                    </div>
                    <div>
                        <h5 className="h">{menu.name}</h5>
                        <p className="h">{menu.description}</p>
                        <h5  className="h text-danger">Price: {menu.price}<span onClick={()=>handleClick(menu)}  style={{float:'right',marginRight:'10px'}} className="btn btn-sm btn-info">Order Now</span></h5>
                        <p className="h mt-5">Price may vary on selected day</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default GalleryDetail;