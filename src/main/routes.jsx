import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Van from '../van/van'
import Company from '../company/company'
import Message from '../dashboard2/message'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/van' component={Van} />
        <Route path='/company' component={Company} />
        <Route path='/message/:idEmpresa/:idRequisicao' component={Message} />
        <Redirect from='*' to='/' />

    </Router>
)