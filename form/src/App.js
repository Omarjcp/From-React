import React from 'react'
import Nav from './componentes/Navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import Form from './componentes/Login/FormLogin';
import { Route } from 'react-router-dom'
import HookForm from './componentes/Home/Home';
import Register from './componentes/Register/Index';

function App() {
  return (
    <>
    
      <Nav />
      <Route exact path='/' render={() => <HookForm />} />
      <Route path='/login' render={() => <Form />} />
      <Route path='/register' render={() => <Register />} />
      
    </>
  );
}

export default App;
