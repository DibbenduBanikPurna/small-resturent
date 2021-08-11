import React, { useContext } from 'react';
import { userContext } from '../../App';
import Price from '../Price/Price';


const CardDetail = () => {
    const [info,setInfo]=useContext(userContext)
   
    console.log(info)

   
   
   
    return (
        <div>
       {
           info.map(info=>{
               return <Price  key={info.id} info={info}/>
           })
       }
        
        </div>
    );
};

export default CardDetail;