import { useState, useEffect } from "react";
import { db } from "../../../Config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import '../../../index.css'


const DeliciasDelMar = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProductos = async () => {
      try {


        const collectionRef = collection(db, "MenuDelMar");
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
      <h1 className="text-center">Menu Delicias del Mar</h1>
      <p className="text-center"> La mejor calidad de productos de nuestro mar</p>
      
      <div>
          {productos.map((producto) => (
            <div key={producto.id} style={{ color: "#880022" }}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={producto.img} alt={producto.nombre} />
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text>{producto.ingredientes}</Card.Text>
                  <Button variant="primary">Price: ${producto.precio}</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
    </div>
          
  );
}

export default DeliciasDelMar