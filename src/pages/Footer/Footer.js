const Footer = () => {
  return(
    <div id="todo">
      <hr></hr>
        <div className="container" >
          <div className="row align-items-center">
                <div class="col">
                  <h6 class="card-title">Ubicación</h6>
                  <ul>
                  <li ><small>Ahumada #3240 - Santiago Centro</small></li>
                  <li ><small>Mail: info@lasdeliciac.cl</small></li>
                  <li><small>Telefono: (+562) 6543 7654</small></li>
                  </ul>
                </div>
                <div class="col">
                  <h6 class="card-title">Sucursales</h6>
                  <ul>
                  <li><small>Pedreros #88965 - La Florida  (+562) 6534 6532</small></li>
                  <li><small>San Martin #5432 - Viña del Mar  (+562) 5432 9876</small></li>
                  <li ><small>Los Libertadores #4534 - Concepcion  (+562) 1234 7632</small></li>
                  </ul>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Footer;