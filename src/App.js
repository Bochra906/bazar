import Home from './pages/home' ; 
import Register from './pages/register' ; 
import Login from './pages/login' ; 
import './App.css';
import React ,  { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component{
   render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/register" component={Register}/>
             <Route path="/login" component={Login}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
    }
}

export default App;