import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h1 className='mt-5 text-center'>Order Summery</h1>
            <div className='ms-4 mt-5'>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Cart;