import {Row,Col,Container} from 'react-bootstrap'
import {useState} from 'react'
import axios from 'axios'
import '../../index.css'
import { db } from "../../Config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { addDoc } from "firebase/firestore";


const Register = ({usuario,login}) => {
  const formInitDatails={
    username : "",
    email : "",
    password : ""
  }

  const [formDatails,setformDatails] = useState('')


  const changeValue =(e)=>{
    e.preventDefault();
    const{name,value} = e.target
   
    setformDatails({
      ...formDatails,
      [name]: value
    })
 

  }


  const handlerSubmit = async(e) => {
    e.preventDefault()
    try{
  
       await addDoc(collection(db,'Cliente'),{
        ...formDatails
      })
    }
    catch(error){
      console.log(error)
    }
    login(formDatails.username)
    setformDatails(formInitDatails)
    
  }

  return (
    <div id="misitio">

<br />
      <Container>
        <Row>
        
          <Col md={6}>
            <img width="100%" height="400PX" src="https://images.unsplash.com/photo-1588123190131-1c3fac394f4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fHJlc3RvcmFudGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="..."></img>
          </Col>
          <Col md={6}>
            <h3 className='d-flex justify-content-center'>Registrar Usuario {usuario}</h3>  
            <label>Registarse como usuario frecuente en nuestro sitio le da beneficios de descuentos en reservas de delivery, como primer consumo tiene un 20% en el total de la commpra y las siguentes compras tendra un 10% de descuento <strong>Registrate Ya</strong></label>
            <br /><br />
            <form onSubmit={handlerSubmit}>
              <Row>
                <Col md={12}>
                    <input type="text" name="username" placeholder='Nombre Usuario' value={formDatails.username} onChange={(e)=>changeValue(e)}></input>
                </Col>
                <br /><br />
                <Col md={12}>
                    <input type="email" name="email" placeholder='Email' value={formDatails.email} onChange={(e)=>changeValue(e)}></input>
                </Col>
                <br /><br />
                <Col md={12}>
                    <input type="password" name="password" placeholder='Password'  value={formDatails.password} onChange={(e)=>changeValue(e)}></input>
                </Col>
                <br /><br />
                <Col md={12}>
                    <button type="submit">Enviar</button>
                </Col>
              </Row>
             </form>
            <br />
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register