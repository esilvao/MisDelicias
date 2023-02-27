import {Row,Col,Container} from 'react-bootstrap'
import {useState} from 'react'
import axios from 'axios'
import '../../index.css'


const Contacto = ({setId}) => {
  const formInitDatails={
    username : "",
    emial : "",
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
      const response = await axios.post('https://users-serv-production.railway.app/auth/register',formDatails)
      const data = response.data
      console.log(data)
      let id = data._id
      setId(id)
      localStorage.setItem('userId',id)
      
    }
    catch(error){
      console.log(error)
    }
    setformDatails(formInitDatails)
  }

  return (
    <div id="misitio">

<br />
      <Container>
        <Row>
        
          <Col md={6}>
            <img width="100%" height="400PX" src="https://images.unsplash.com/photo-1665233272919-38663f1a1b7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlc3RvcmFudGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="..."></img>
          </Col>
          <Col md={6}>
            <h3 className='d-flex justify-content-center'>Contactanos</h3>  
            <label>Para dudas, consultas, sugerencias o reclamos por favor envianos un mensaje y nosotros atenderemos para dar respuesta a tu solicitud <strong>Escribenos </strong></label>
            <br /><br />
            <form onSubmit={handlerSubmit}>
              <Row>
                <Col md={12}>
                    <input type="text" name="username" placeholder='Nombre Usuario' value={formDatails.username} onChange={(e)=>changeValue(e)}></input>
                </Col>
                <br /><br />
                <Col md={12}>
                    <input type="email" name="email" placeholder='Email' value={formDatails.emial} onChange={(e)=>changeValue(e)}></input>
                </Col>
                <br /><br />
                <Col md={12}>
                    <input type="text" name="asunto" placeholder='Asunto'  value={formDatails.asunto} onChange={(e)=>changeValue(e)}></input>
                </Col>
                <br /><br />
                <Col md={12}>
                    <textarea name="comentario" placeholder='Comentario'  value={formDatails.comentario} onChange={(e)=>changeValue(e)} cols="23" rows="3"></textarea>
                </Col>
                <br /><br />
                <Col md={12}>
                    <button type="submit">Enviar</button>
                   
                </Col>
              </Row>
             </form>
             <h5 className='d-flex justify-content-center'>Horarios de atención</h5>  
            <label><strong>Lunes a Sabado </strong>11:00 a 02:00 (todos los locales)</label>
            <label><strong>Domingo</strong>11:00 a 20:00  (todos los locales)</label>
            <br /><br />
            <h5 className='d-flex justify-content-center'>Ubicados en</h5>  
            <label>Ahumada #3240 - Santiago Centro</label>
            <label>Informacion de contacto Mail: info@lasdeliciac.cl - </label>
            <label>Telefono: (+562) 6543 7654</label>
            <br /><br />
            <br />
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contacto