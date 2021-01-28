import React from 'react';
import './Collectionpreview.scss';

const Collectionpreview = ({title,items}) => (
            <div className="collection-preview">
                 <h1 className="collection-title">{title}</h1>
                 <div className="preview">
                     {items
                     .filter((val,indx)=>indx<4)
                     .map((item)=>(
                          <div key={item.id}>{item.name}</div>
                     ))}
                 </div>    
            </div>
        );
export default Collectionpreview;
