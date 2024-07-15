import React from 'react';
import Button from 'react-bootstrap/Button';
import {Card,  Container, Row, Col } from 'react-bootstrap';
import productImage from '../Images/product.webp'; // Sample product image
import addImage from '../Images/add.webp'; // Ensure the correct path to your add product image
import updateImage from '../Images/update.webp'; // Ensure the correct path to your update product image

const Home = () => {
  return (
    <Container className="mt-5">
      <Row className="text-center">
        <Col>
        <h1 style={{ marginTop: '30px' }}>
        Welcome to Our <span style={{ color: 'brown' }}>Product Management System</span>
      </h1>
          <img src="https://blog.dmcc.ae/hs-fs/hubfs/o2/img/blog/How%20to%20Start%20an%20E-commerce%20Business%20in%20Dubai/ecommerce.jpg?width=770&name=ecommerce.jpg" style={{width:'1300px',height:'200px',marginTop:'30px'}} alt=''></img>
          <p style={{marginTop:'30px',fontSize:'20px'}}>
        <span style={{ color: 'green', fontWeight: 'bold' }}>Manage</span> your products efficiently with our system. You can <span style={{ color: 'blue', fontWeight: 'bold' }}>add new products</span>, <span style={{ color: 'orange', fontWeight: 'bold' }}>update existing ones</span>, and <span style={{ color: 'purple', fontWeight: 'bold' }}>view the complete list of products</span>. Our <span style={{ color: 'red', fontWeight: 'bold' }}>user-friendly interface</span> ensures that you can perform these tasks effortlessly, improving your inventory management experience.
      </p>
        </Col>
      </Row>

      <Row className="mt-4 align-items-center">
        <Col md={4} className="text-center">
          <Card>
            <Card.Img variant="top" src={addImage} />
            <Card.Body>
              <Card.Title>Add Products</Card.Title>
              <Card.Text>
                Use the form provided in the "Add Product" section to enter details of the new product you want to add to the inventory. Make sure to include the product name, description, price, and category.
              </Card.Text>
              <Button variant="primary">Add Products Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="text-center">
          <Card>
            <Card.Img variant="top" src={updateImage} />
            <Card.Body>
              <Card.Title>Update Products</Card.Title>
              <Card.Text>
                In the "Update Product" section, select a product from the list and modify its details as needed. Ensure to keep your product information up to date.
              </Card.Text>
              <Button variant="primary">Update Products Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="text-center">
          <Card>
            <Card.Img variant="top" src={productImage} />
            <Card.Body>
              <Card.Title>Product List</Card.Title>
              <Card.Text>
                The "Product List" section provides a comprehensive list of all the products currently in your inventory. You can view details, search for specific products, and see their availability status.
              </Card.Text>
              <Button variant="primary">View Product List</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
