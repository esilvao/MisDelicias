import { Outlet } from "react-router-dom";
import Footer from "../../pages/Footer/Footer";
import Navigation from "../../routes/Navigation/Navigation";


const Layout = ({usuario}) => {
  return (
    <div id="todo">
        <Navigation usuario={usuario} />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout