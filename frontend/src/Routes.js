import React from 'react';
import { Switch } from 'react-router-dom';

import RouteHandler from "./components/RouteHandler";
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import AdPage from './pages/AdPage';
import AddAd from './pages/AddAd';



const Routes = () => {
    return(
        <Switch>
            <RouteHandler exact path="/">
                <Home />
            </RouteHandler>

            <RouteHandler exact path="/about">
                <About />
            </RouteHandler>  

            <RouteHandler exact path="/signin">
                <Signin />
            </RouteHandler>  

            <RouteHandler exact path="/signup">
                <Signup />
            </RouteHandler>  

            <RouteHandler exact path="/ad/:id">
                <AdPage />
            </RouteHandler>

            <RouteHandler private exact path="/post-an-ad">
                <AddAd />
            </RouteHandler>

            <RouteHandler>
                <NotFound />
            </RouteHandler>
        </Switch>
    )
}

export default Routes;