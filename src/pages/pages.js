import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Example from '../components/Example';
import Welcome from '../components/Welcome/Welcome';
import Main from './../components/Main/Main'
function Pages() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Welcome}  />
                <Route path='/daplets' component={Main} />
                <Route path='/example' component={Example} />
            </Switch>
        </BrowserRouter>
    )
}

export default Pages
