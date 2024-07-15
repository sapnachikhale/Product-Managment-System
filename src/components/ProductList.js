import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            let result = await fetch('http://localhost:5011/products');
            result = await result.json();
            console.log('Fetched products:', result); // Debugging
            setProducts(Array.isArray(result) ? result : result.data || []);
        } catch (error) {
            console.error('Failed to fetch products:', error);
            setProducts([]);
        }
    };

    const deleteProduct = async (id) => {
        try {
            let result = await fetch(`http://localhost:5011/products/${id}`, {
                method: 'DELETE',
            });
            result = await result.json();
            console.log('Delete response:', result); // Debugging
            if (result) {
                getProducts();
                alert('Product deleted successfully');
            }
        } catch (error) {
            console.error('Failed to delete product:', error);
        }
    };

    const searchHandle = async (event) => {
        let key = event.target.value;
        if(key){
            let result = await fetch(`http://localhost:5011/search/${key}`);
            result = await result.json();
            if (Array.isArray(result)) {
                setProducts(result);
            } 
        }else{
            getProducts();
        }
    };
    return (
        <div className='product-list' style={{marginTop:'70px'}}>
            <h3>Product List</h3>
            <input
                className='search-product-list'
                type='text'
                placeholder='search product'
                onChange={searchHandle}
            />
            <ul className='product-list'>
                <li><b>Sr. No</b></li>
                <li><b>Name</b></li>
                <li><b>Price</b></li>
                <li><b>Category</b></li>
                <li><b>Company</b></li>
                <li><b>Operation</b></li>
            </ul>
            {
            products.length>0 ? products.map((item, index) => 
                <ul key={item._id} className='product-list'>
                    <li>{index + 1}</li>
                    <li>{item.name}</li>
                    <li>$ {item.price}</li>
                    <li>{item.category}</li>
                    <li>{item.company}</li>
                    <li className='delete-update-list'>
                        <Link onClick={() => deleteProduct(item._id)}>Delete</Link>
                        <Link to={'/update/' + item._id}>Update</Link>
                    </li>
                </ul>
            )
            :<h2>No result found</h2>
            
        }
        </div>
    );
};

export default ProductList;
