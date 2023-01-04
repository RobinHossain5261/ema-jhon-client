import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Cart from '../Shared/Cart/Cart';
import './Shop.scss';

const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='shop-containear mt-5'>
            <div className="products-containear">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-containear">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;