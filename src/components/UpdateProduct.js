import React, { useEffect, useState } from 'react';
import './AddProduct.css';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params = useParams();
    const navigate=useNavigate();

    const handleUpdateProduct = async () => {
        console.log(name, price, category, company);
        let result=await fetch(`http://localhost:5011/product/${params.id}`,{
            method:'put',
            body:JSON.stringify({name, price, category, company}),
            headers:{
                'Content-Type':"application/json"
            }
        })
        result=await result.json();
        console.log(result)
        navigate('/product')
    };

    useEffect(() => {
        const getProductDetails = async () => {
            try {
                const response = await fetch(`http://localhost:5011/product/${params.id}`);
                const result = await response.json();
                if (result.result === "No Record Found") {
                    console.error(result.result);
                } else {
                    setName(result.name);
                    setPrice(result.price);
                    setCategory(result.category);
                    setCompany(result.company);
                }
            } catch (error) {
                console.error('Failed to fetch product details:', error);
            }
        };

        getProductDetails();
    }, [params.id]); 

    return (
        <div className='product'>
            <h1>Update Products</h1>
            <input
                className='product-input'
                type="text"
                placeholder="Enter Product Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className='product-input'
                type="text"
                placeholder="Enter Product price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input
                className='product-input'
                type="text"
                placeholder="Enter Product category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            />
            <input
                className='product-input'
                type="text"
                placeholder="Enter Product company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />
            <button className='add-button' onClick={handleUpdateProduct}>Update Product</button>
        </div>
    );
};

export default UpdateProduct;
