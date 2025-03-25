import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductsList = ({ addToCart, removeFromCart }) => {
    const products = [
        { id: 1, name: 'Ice Cream', price: 800, image: '/images/icecream.jpg' },
        { id: 2, name: 'Water Melon', price: 100, image: '/images/watermelon.jpg' },
        { id: 3, name: 'Donuts', price: 70, image: '/images/donuts.jpg' },
        { id: 4, name: 'Chocolates', price: 30, image: '/images/chocolates.jpg' }
    ];
    
    const add = (price) => {
        addToCart(price);
    };
    
    const remove = (price) => {
        removeFromCart(price);
    };
    
    return (
        <div className="container mt-4">
            <h5 className="mb-3">Product List</h5>
            <div className="row">
                {products.map((product) => (
                    <div key={product.id} className="col-md-3 mb-4">
                        <div className="card text-center">
                            <img src={product.image} alt={product.name} className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h6 className="card-title">{product.name}</h6>
                                <p className="card-text">${product.price}</p>
                                <button className="btn btn-success me-2" onClick={() => add(product.price)}>Add</button>
                                <button className="btn btn-danger" onClick={() => remove(product.price)}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsList;
