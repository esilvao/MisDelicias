import '../../index.css'
import { useState, useEffect } from "react";
import {Row,Col,Container} from 'react-bootstrap'
import { db } from "../../Config/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { doc, addDoc } from "firebase/firestore";

const Reservas = () => {

  const [reserva, seReserva] = useState([]);

  const formInitDatailsReserva={
    comentarios : "",
    confirmado : false,
    correo : "",
    fecha : "",
    hora : "",
    nombre : "",
    sector : "",
    nroPersonas : 0,
    telefono:""    
  }

  const [formDatails,setformDatails] = useState('')
  const [status,setStatus] = useState({})


  useEffect(() => {
    const getReservas = async () => {
      try {


        const collectionRef = collection(db, "Reservas");
        const response = await getDocs(collectionRef);
        
        const docs = response.docs.map((doc) => {
          const data = doc.data(); // firestore guarda la informacion de cada documento en data()
          data.id = doc.id;
          return data;
        });

        seReserva(docs);
      } catch (error) {
        console.log(error);
      }
    };

    getReservas();
  }, [reserva]);
//document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

const changeValue =(e)=>{
  e.preventDefault();
  const{name,value} = e.target
 
  setformDatails({
    ...formDatails,
    [name]: value
  })}

const handlerSubmit = async(e) => {
  e.preventDefault()
  try{

     await addDoc(collection(db,'Reservas'),{
      ...formDatails
    })
  }
  catch(error){
    console.log(error)
  }
  setformDatails(formInitDatailsReserva)
}

  return(
    

   
    <div id="misitio">
      <br />
      <Container>
        <Row>
        
          <Col md={6}>
            <img width="100%" height="400PX" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHJlc3RvcmFudGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="..."></img>
          </Col>
          <Col md={6}>
              <h1 align="center">Reservas</h1>
              <form onSubmit={handlerSubmit}>  
              <Container>
              <Row>
                  <Col align="right">
                    <label>Nombre: </label>  
                  </Col>        
                  <Col>           
                    <input type="text" 
                          name="nombre"
                          placeholder="Escribe tu nombre aquí." 
                          size="20"
                          minlength="8"
                          maxlength="64"
                          required               
                          autofocus
                          value={formDatails.nombre} onChange={(e)=>changeValue(e)} /> 
                  </Col>
                </Row>
                <Row>
                  <Col align="right">
                    <label>Correo: </label>  
                  </Col>        
                  <Col>           
                    <input type="email" 
                          name="correo"
                          placeholder="Escribe tu correo aquí." 
                          size="20"
                          minlength="8"
                          maxlength="64"
                          required               
                          autofocus
                          value={formDatails.correo} onChange={(e)=>changeValue(e)} />  
                  </Col>
                </Row>
                <Row>
                  <Col align="right">
                    <label>Teléfono: </label>
                  </Col>
                  <Col>
                    <input type="tel" 
                            placeholder="Nro de Celular" 
                            size="11" 
                            name="telefono" 
                            minlength="9"
                            maxlength="9"
                            pattern="[0-9]{9}"
                            title="valor de 9 digitos de celular" 
                            required
                            value={formDatails.telefono} onChange={(e)=>changeValue(e)} /> 
                  </Col>
                </Row>
                <Row>
                  <Col align="right">
                  <label for="start">Fecha Reserva (mes/dia):</label>
                  </Col>
                  <Col>
                    <input type="date" 
                        id="fechareserva" 
                        name="fecha"
                        value={formDatails.fecha} onChange={(e)=>changeValue(e)} />
                  </Col>
                </Row>
                <Row>
                  <Col align="right">
                  <label for="start">Hora de Reserva :</label>
                  </Col>
                  <Col>
                    <input type="time" 
                        title="debe indicar hora en AM o PM" 
                        id="horareserva" 
                        name="hora"
                        value={formDatails.hora} onChange={(e)=>changeValue(e)} />
                  </Col>
                </Row>
                <Row>
                  <Col align="right">
                  <label>Número personas: </label>
                  </Col>
                  <Col>
                  <input type="number" 
                        size="5" 
                        min="2"
                        max="30"
                        name="nroPersonas"
                        value={formDatails.nroPersonas} onChange={(e)=>changeValue(e)} />
                  </Col>
                </Row>
                <Row>
                  <Col align="right">
                  <label>Sector de reserva: </label>
                  </Col>
                  <Col>
                  <input list="salonComedor" name="sector" value={formDatails.sector} onChange={(e)=>changeValue(e)} />
                  <datalist id="salonComedor">
                    <option value="Comedor Rojo"/>
                    <option value="Comedor Azul"/>
                    <option value="Comedor Turqueza"/>
                    <option value="Terrada Sur"/>
                    <option value="Terraza Grande"/>
                  </datalist>

                  </Col>
                </Row>
                <Row>
                  <Col align="right">
                  <label>Comentarios : </label>
                  </Col>
                  <Col>
                  <textarea name="comentarios" cols="23" rows="5"  name="comentarios" value={formDatails.comentarios} onChange={(e)=>changeValue(e)} />

                  </Col>
                </Row>
              </Container>
              <br />
              <div align="center"><input type="submit" value="Enviar Solicitud de Reserva"/></div>  
              </form>
              <br />

        </Col>
      </Row>
     </Container>
     <hr/>
     <div>
      <h5 align="center"> Listado de reservas confirmadas</h5>
      
          <Container>
          <Row>
                  <Col><strong>Nombre</strong></Col>
                  <Col><strong>Fecha</strong></Col>
                  <Col><strong>Hora</strong></Col>
                  <Col><strong>Sector</strong></Col>
                  <Col><strong>Nro Personas</strong></Col>
                  <Col><strong>Confirmada</strong></Col>
          </Row>

              
           {reserva.map((reserva) => (
              <div key={reserva.id} style={{ color: "#880022" }}>
                <Row>
                  <Col>
                  {reserva.nombre}
                  </Col>
                  <Col>
                  {reserva.fecha}
                  </Col>
                  <Col>
                  {reserva.hora}
                  </Col>
                  <Col>
                  {reserva.sector}
                  </Col>
                  <Col>
                  {reserva.nroPersonas}
                  </Col>
                  <Col>
                  {reserva.confirmado ? <input type="checkbox" value="Confirmada"  checked/>:<input type="checkbox" value="Por Confirmar" />}
                  
                 
                  </Col>
                </Row>
              </div>
            ))}
          </Container>
          <hr/>
        </div>
     </div>
    
  )
}

export default Reservas;