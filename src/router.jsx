import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header'
function Routes(){
    return(

        <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}/>
        </Switch>
        
      
        </BrowserRouter>
    )
}export default Routes