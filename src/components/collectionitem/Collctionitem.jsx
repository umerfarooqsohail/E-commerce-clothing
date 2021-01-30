import React from 'react';
import './Collectioitem.scss';
const Collctionitem = ({name,imageUrl,price}) => {
    return (
        <div className="collection-item">
           <div className="collection-item-img"
               style={{backgroundImage:`url(${imageUrl})`}}>
           </div>
           <div className="collection-item-footer">
               <span className="col-item-name">{name}</span>
               <span className="col-item-price">{price}</span>
           </div>
            
        </div>
    );
}

export default Collctionitem;
