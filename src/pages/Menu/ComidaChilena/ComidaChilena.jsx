import { useState, useEffect } from "react";
import { db } from "../../../Config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Row,Col,Container} from 'react-bootstrap'
import '../../../index.css'


const ComidaChilena = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      try {


        const collectionRef = collection(db, "Menu");
        const response = await getDocs(collectionRef);

        const docs = response.docs.map((doc) => {
          const data = doc.data(); // firestore guarda la informacion de cada documento en data()
          data.id = doc.id;
          return data;
        });

        setProductos(docs);
      } catch (error) {
        console.log(error);
      }
    };

    getProductos();
  }, []);


  console.log("ARRAY DE len "+productos.length);
  console.log("ARRAY DE productos "+productos);
  return (
    <div id="misitio">
      <h1 className="text-center">Menu Comida a la Chilena</h1>
      <p className="text-center"> Exquisitos platos con las mejores carnes y verduras de nuestra tierra</p>
      <Container>
      <Row className="d-flex flex-row mb-3" >
          {productos.map((producto) => (
            <Col sm={12} md={4} lg={3} className="p-3" key={producto.id} style={{ color: "#880022" }}>
              <Card className="p-1" style={{ width: "15rem",height: "25rem"}}>
                <Card.Img  width="300px%" height="200px" variant="top" src={producto.img} alt={producto.nombre} />
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text>{producto.ingredientes}</Card.Text>
                  <Button variant="primary">Price: ${producto.precio}</Button>
                </Card.Body>
              </Card>
              </Col>
            
          ))}
        </Row>
        </Container>
    </div>
          
  );
}

export default ComidaChilena