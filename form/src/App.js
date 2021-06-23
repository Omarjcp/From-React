import React from 'react'
import { Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import HookForm from './componentes/Home/Home';
import Nav from './componentes/Navbar/Navbar';
import Form from './componentes/Login/FormLogin';
import Register from './componentes/Register/Index';
import About from './componentes/About/About';

function App() {
  return (
    <>
    
      <Nav />
      <Route exact path='/' render={() => <HookForm />} />
      <Route path='/login' render={() => <Form />} />
      <Route path='/register' render={() => <Register />} />
      <Route path='/about' render={() => <About />} />
      
    </>
  );
}

export default App;
