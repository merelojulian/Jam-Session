
import './App.css';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Componentes/footer/Footer';
import Cursos from './Componentes/cursosTarjeta/Cursos';
import Logo from './Componentes/logo/logo';
import Banner from './Componentes/banner/banner';



function App() {

  return (

    <div className="App">
      <BrowserRouter>
        {/*<header> <NavBar /></header>}*/}

        <body>
          <div>
            <Logo />
          </div>
          <div>
            <Banner />
          </div>

          <Routes>
            {/*
            <Route exact path='/' element={<Landing />} />*/}

            <Route exact path='/' element={

              <div>
                <Cursos />
              </div>


            } />

          </Routes>
        </body>

        <footer>
          <Footer />
        </footer>

      </BrowserRouter>


    </div >
  );
}

export default App;


/*

import { IconName, CiBatteryCharging} from "react-icons/ci";
import Nav from './Componentes/Nav/Nav';
import Contenedor from './Componentes/Contenedor/Contenedor.jsx'
// const styles = {}
function App() {
  return (
      <BrowserRouter>
         <Routes>
          <Route exact path='/' element={<Nav/>}/>
          <Route exact path='/contenedor' element={<Contenedor/>}/>
         </Routes>
      </BrowserRouter>




     <div className='container2'>
                  <div>
                    <h1>Septiembre</h1>
                  </div>
                  <Tarjeta2 />
                </div>
                <div className='container3'>
                  <div>
                    <h1>Julio</h1>
                  </div>
                  <Tarjeta3 />
                </div>



                

      */

