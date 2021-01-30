import React from 'react';
import Collctionitem from '../collectionitem/Collctionitem';
import './Collectionpreview.scss';

const Collectionpreview = ({title,items}) => (
            <div className="collection-preview">
                 <h1 className="collection-title">{title}</h1>
                 <div className="preview">
                     {items
                     .filter((val,indx)=>indx<4)
                     .map(({id,...otherscollectionitemsProps})=>(
                          <Collctionitem 
                          key={id} 
                          {...otherscollectionitemsProps}/>
                     ))}
                 </div>    
            </div>
        );
export default Collectionpreview;
