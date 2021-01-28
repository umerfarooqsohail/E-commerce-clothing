import React, { Component } from 'react';
import Collectionpreview from '../../components/collectionpreview/Collectionpreview';
import Shopedata from './Shopedata';


class Shopepage extends Component {
    constructor(props){
        super();
        this.state={
            collection:Shopedata
        }
    }
    render() {
        const {collection}=this.state;
        return (
            <div className="shop-page">
                {collection.map(({id,...othercollectionprops})=>(
                    <Collectionpreview
                        key={id}
                        {...othercollectionprops}
                    />
                ))}
            </div>
        );
    }
}

export default Shopepage;
