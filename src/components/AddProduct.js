import React, { useState } from 'react';
import './AddProduct.css';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const [error, setError] = useState(false);

    const handleAddProduct = async () => {
        if (!name || !price || !category || !company) {
            setError(true);
            return false;
        }
        const userId = JSON.parse(localStorage.getItem('users'));
        let result = await fetch('http://localhost:5011/add-product', {
            method: 'POST',
            body: JSON.stringify({ name,  price: Number(price), category, company, userId }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result);
        if(result){
            alert("Product Added Successfully");
        }
    };

    return (
        <div className='product'>
            <h1>Add Products</h1>
            <input
                className='product-input'
                type="text"
                placeholder="Enter Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            {error && !name && <span className='invalid-input'>Enter a valid name</span>}
            <input
                className='product-input'
                type="text"
                placeholder="Enter Product price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            {error && !price && <span className='invalid-input'>Enter a valid price</span>}
            <input
                className='product-input'
                type="text"
                placeholder="Enter Product category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            {error && !category && <span className='invalid-input'>Enter a valid category</span>}
            <input
                className='product-input'
                type="text"
                placeholder="Enter Product company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            {error && !company && <span className='invalid-input'>Enter a valid company</span>}
            <button className='add-button' onClick={handleAddProduct}>Add Product</button>
        </div>
    );
};

export default AddProduct;
