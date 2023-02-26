import '../../index.css'

import {Row,Col,Container} from 'react-bootstrap'

const Reservas = () => {



//document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
  return(
    <div id="misitio">
      <br />
      <Container>
        <Row>
        
          <Col md={6}>
            <img width="100%" height="400PX" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHJlc3RvcmFudGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="..."></img>
          </Col>
          <Col md={6}>
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
                          size="20"
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
                  <label for="start">Hora de Reserva :</label>
                  </Col>
                  <Col>
                    <input type="time" 
                        title="debe indicar hora en AM o PM" 
                        id="horareserva" 
                        name="horareserva"/>
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
                <Row>
                  <Col align="right">
                  <label>Sector de reserva: </label>
                  </Col>
                  <Col>
                  <input list="salonComedor"></input>
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
                  <textarea name="comentarios" cols="23" rows="5"></textarea>

                  </Col>
                </Row>
              </Container>
              <br />
              <div align="center"><input type="submit" value="Confirmar"/></div>  
              </form>
              <br />

        </Col>
      </Row>
     </Container>
    </div>
  )
}

export default Reservas;