import {useParams} from  'react-router-dom';
import axios from "axios";
import{useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col,Row} from 'react-bootstrap';

const DetalleProducto = () => {
  const [product,setProduct] = useState([]);
  let { productId } = useParams();
  useEffect(() => {
    const getProduct = async() => {
      const response = await axios ('https://fakestoreapi.com/products')
      const resultado = await response.data;
      let miproducto = resultado.find(product => product.id === productId)
      setProduct(miproducto);
    }
    getProduct()
  },[])

  return (
    <div>
       <Row>

      <Col key={product.id} >
        <Card>
        <Card.Img variant="top" src={product.image} alt={product.title}  style={{width : '100px',height: '100px'}} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Button variant="primary">Agregar</Button>
        </Card.Body>
        </Card>
      </Col>

      </Row>
      
    </div>
  )
}

export default DetalleProducto