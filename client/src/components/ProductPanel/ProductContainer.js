import  React, {Component } from 'react';
import ProdPrev from './ProdPrev';
import ProdDetail from './ProdDetail'

const prodArr = [
    {
        id: 0,
        category: "tops",
        name: "tshirt",
        price: 20,
        size: "Medium"
    },
    {
        id: 1,
        category: "bottoms",
        name: "pants",
        price: 30,
        size: "Large"
    },
    {
        id: 2,
        category: "dresses",
        name: "dress",
        price: 25,
        size: "Small"
    },
    {
        id: 3,
        category: "bottoms",
        name: "trousers",
        price: 36,
        size: "Small"
    },
    {
        id: 4,
        category: "dresses",
        name: "maxi dress",
        price: 39,
        size: "Small"
    },
    {
        id: 5,
        category: "tops",
        name: "blouse",
        price: 40,
        size: "Large"
    },
    {
        id: 6,
        category: "tops",
        name: "crop top",
        price: 15,
        size: "X-Small"
    },
]

// handleproductselect function which will enable productdetail modal on that productprev
// handleproductremove disables the modal

class ProductContainer extends Component {
    render() {
        return (
            prodArr.map(elem => <ProdPrev category={elem.category} name={elem.name} price={elem.price} key={elem.id} />)
        );
    };
}

export default ProductContainer;