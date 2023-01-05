import React from 'react';
import './Cart.scss';

const Cart = ({ cart }) => {

    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='cart ms-4'>
            <h1 className='mt-5'>Order Summery</h1>
            <div className=' mt-3'>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h4>Grand Total: ${grandTotal}</h4>
            </div>
        </div>
    );
};

export default Cart;