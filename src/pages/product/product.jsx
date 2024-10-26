import React from "react";
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import product4 from '../../assets/product4.png';
import product5 from '../../assets/product5.png';
import product6 from '../../assets/product6.png';
import product7 from '../../assets/product7.webp';
import product8 from '../../assets/product8.webp';
import product9 from '../../assets/product9.webp';
import product10 from '../../assets/product10.webp';



import "./product.css";
export const PRODUCTS = [
    {
        id: 1,
        productName: "Longines Automatic",
        price: 2199.99,
        productImage: product1,

    },
    {
        id: 2,
        productName: "Longines Master Collection",
        price: 1499.99,
        productImage: product2,

    },
    {
        id: 3,
        productName: "Rolex Cellini Date Black Dial",
        price: 8999.99,
        productImage: product3,

    },
    {
        id: 4,
        productName: "Rolex Cellini Moonphase",
        price: 12909.99,
        productImage: product4,

    },
    {
        id: 5,
        productName: "Rolex Datejust",
        price: 10099.99,
        productImage: product5,

    },
    {
        id: 6,
        productName: "Rolex Submariner Watch",
        price: 13999.99,
        productImage: product6,

    },
    {
        id: 7,
        productName: 'Zoro Mindsweep G',
        price: 1699.99,
        productImage: product9,

    },
    {
        id: 8,
        productName: 'Romeleu Authentic',
        price: 1674.99,
        productImage: product10,

    },
    {
        id: 9,
        productName: 'Sierra Large Dial',
        price: 1666.99,
        productImage: product8,

    },
    {
        id: 10,
        productName: 'Hermes God Burst',
        price: 147.88,
        productImage: product7,

    }



];
export default function Products() {
    

    return (
        <div className="products-page">
            <div className="shopTitle">
                <h1>Products</h1>
            </div>
            <div className="products">
                {" "}
                {PRODUCTS.map((product) => (
                    <div className="product">
                        <img src={product.productImage} alt={product.productName} />
                        <h3>{product.productName}</h3>
                        <p>{"$"}{product.price}</p>
                        <button className="addToCartBttn">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );

}


// export const Products = (props) => {

//     const {id, productName, price, productImage} = props.data;


//     return(
//         <div>Products</div>
//     )
// }