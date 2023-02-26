import {Row,Col,Container} from 'react-bootstrap'
import {useState} from 'react'
import axios from 'axios'
import '../../index.css'


const Register = ({setId}) => {
  const formInitDatails={
    username : "",
    emial : "",
    password : ""
  }

  const [formDatails,setformDatails] = useState('')
  const [status,setStatus] = useState({})

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
      if (response.status===200){
        setStatus({succes: true, message : 'usuario creado con exito'})
      }else{
        setStatus({succes: false, message : 'usuario ya se encuentra creado'})
      }

    }
    catch(error){
      console.log(error)
    }
    setformDatails(formInitDatails)
  }

  return (
    <div id="misitio">
      <Container>
        <Row>
          <Col md={6}>
            <img src="" alt="..."></img>
          </Col>
          <Col md={6}>
            <h3 className='d-flex justify-content-center'>Registrar</h3>  
            <form onSubmit={handlerSubmit}>
              <Row>
                <Col md={6}>
                    <input type="text" name="username" placeholder='Nombre Usuario' value={formDatails.username} onChange={(e)=>changeValue(e)}></input>
                </Col>
                <Col md={6}>
                    <input type="email" name="email" placeholder='Email' value={formDatails.emial} onChange={(e)=>changeValue(e)}></input>
                </Col>
                <Col md={12}>
                    <input type="password" name="password" placeholder='Password'  value={formDatails.password} onChange={(e)=>changeValue(e)}></input>
                </Col>
                <Col md={12}>
                    <button type="submit">Submit</button>
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