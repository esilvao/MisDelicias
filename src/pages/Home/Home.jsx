import Carousel from 'react-bootstrap/Carousel';
import {Row,Col,Container} from 'react-bootstrap';
import './home.css';

const Home = () =>{
  return (
    <p id="misitio">
      <br></br>
      <h3>Mis Delicias Favoritas</h3>
      <br></br>
            <Container>
        <Row className='d-flex align-items-center'>
          <Col md={6} >
            <h5>Comida Chilena</h5>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum enim quia, nihil pariatur sunt quaerat quibusdam hic fugit facere! Repudiandae deleniti ad.</div>
            <hr></hr>
            <h5>Postres</h5>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum enim quia, nihil pariatur sunt quaerat quibusdam hic fugit facere! Repudiandae deleniti ad.</div>
            <hr></hr>
            <h5>La hora del té </h5>
            <div>La hora del té Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste harum enim quia, nihil pariatur sunt quaerat quibusdam hic fugit facere! Repudiandae deleniti ad.</div>
            <br></br>
          </Col>
          
          <Col md={6} >

          <Carousel variant="dark" >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.istockphoto.com/id/1347161226/es/foto/joven-latina-comiendo-tacos-mexicanos-en-la-terraza-de-un-restaurante-en-m%C3%A9xico-latinoam%C3%A9rica.jpg?b=1&s=170667a&w=0&k=20&c=03Aba4n_CPvAF3Lofxx8YgQHjL-I-_2LPaRgdEVEftA="
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Comida Chilena</h5>
          <p>Comida tradicional chilena del norte y sur de nuestro pais, con productos del Mar y las mejores Carnes</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdG9yYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Postres</h5>
          <p>Los mas exisitos postres con los futos de estacion y recien prepatados.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc3RvcmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>La hora del Tee</h5>
          <p>
            El mejor momento para comprar las delicias en familia
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
          </Col>
        </Row>
      </Container>
      
    </p>
  )
}

export default Home;