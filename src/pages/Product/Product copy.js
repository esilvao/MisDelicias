import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col,Row} from 'react-bootstrap';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import {useNavigate} from "react-router-dom"



const Product = () => {
  const [productos,setProductos]= useState([]);
  const navegate = useNavigate()

  useEffect(() => {
    const getProducts = async() => {
      const response = await axios ('https://fakestoreapi.com/products')
      const resultado = await response.data;
      setProductos(resultado);
    }
    getProducts()
  },[])


  console.log(productos);

  return (
    <div>
      <Row xs={1} md={2} lg={4} className="g-4">
      {productos.map((miproducto)=>(
      <Col key={miproducto.id}>
        <Card>
        <Card.Img variant="top" src={miproducto.image} alt={miproducto.title} />
        <Card.Body>
          <Card.Title>{miproducto.title}</Card.Title>
          <Card.Text>
            {miproducto.description}
          </Card.Text>
          <button onClick={()=>navegate(`/product/${miproducto.id}`)}>About</button>
          
        </Card.Body>
        </Card>
      </Col>
    ))}
      </Row>
      
    </div>
  )
}

export default Product