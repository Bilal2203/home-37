import './App.css';
import React from 'react';
import {BrowserRouter as Router,Link, Route} from 'react-router-dom'
import User from './User'

function App() {
const pages = [
    {
    route: "/",
    name: "Главная",

    component: 'Home',
    },
    {
    route: "/contacts",
    name: "Контакты",
    
    component: 'Contacts'
    },
    {
    route: "/about",
    name: "О нас",
    
    component: 'About'
    },
    {
    route: "/employees",
    name: "Сотрудники",
    
    component: 'Employees'
    },
]
  return (
    <div className="App">
      <Router>
      <h1>Homework #37</h1>
      {
        pages.map((item) => 
        <div className='home'>
          <Link to={"/pages/"+item.component+"/"+item.name+"/about"+item.route}>{item.name}</Link>
        </div>
        
          )
      }
      <hr/>
      <Route path="/pages/:route/:name/:component" ><User/></Route>
      </Router>
    </div>
  );
}
export default App;
