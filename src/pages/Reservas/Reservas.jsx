import '../../index.css'

import {Row,Col,Container} from 'react-bootstrap'

const Reservas = () => {



//document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
  return(
    <div id="misitio">
      <h1>Reservas</h1>
      <form>  
      <Container>
        <Row>
          <Col align="right">
            <label>Correo: </label>  
          </Col>        
          <Col>           
            <input type="email" 
                  placeholder="Escribe tu correo aquí." 
                  size="34"
                  minlength="8"
                  maxlength="64"
                  required               
                  autofocus/> 
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
                    name="telephone" 
                    minlength="9"
                    maxlength="9"
                    pattern="[0-9]{9}"
                    title="valor de 9 digitos de celular" 
                    required></input>
          </Col>
        </Row>
        <Row>
          <Col align="right">
          <label for="start">Fecha Reserva (mes/dia):</label>
          </Col>
          <Col>
            <input type="date" 
                 id="fechareserva" 
                 name="fechareserva"/>
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
                max="30"/>
          </Col>
        </Row>
      </Container>
      <div align="center"><input type="submit" value="Confirmar"/></div>  
     
      </form>
      
  
      
   
      <br />
      <br />
    </div>
  )
}

export default Reservas;