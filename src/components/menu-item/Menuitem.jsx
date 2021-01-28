import React from 'react';
import { withRouter } from 'react-router-dom';
import './Menuitem.scss';
const Menuitem = ({title,imgurl,size,linkurl,history,match}) => {
  console.log(history)
    return (
      <div className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkurl}`) } >
         <div className="background-image"
           style={{backgroundImage:`url(${imgurl})`}}/>
        <div className="content">
          <h1 className="title">{title}</h1>
          <span className="subtitle">Shop Now</span>
        </div>
     </div>
    );
}

export default withRouter(Menuitem);
