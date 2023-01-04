import React from 'react';
import './Product.scss';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.scss';

const Product = ({ product, handleAddToCart }) => {
    const { img, name, price, seller, ratings } = product;


    return (
        <Card className='pro-card'>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Price: ${price}
                </Card.Text>
                <Card.Text>
                    Manufacturer: {seller}
                </Card.Text>
                <Card.Text className='mb-5'>
                    Ratings: {ratings} start
                </Card.Text>
                <div>
                    <button onClick={() => handleAddToCart(product)} className='buy-btn '>
                        <p className='me-2 mt-3'>Add to Cart</p>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>

                </div>
            </Card.Body>
        </Card >
    );
};

export default Product;