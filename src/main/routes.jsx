import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard2 from '../dashboard2/dashboard2'
import BillinCycle from '../billingCycle/billingCycle'
import Company from '../company/company'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard2} />
        <Route path='/billingCycle' component={BillinCycle} />
        <Route path='/company' component={Company} />
        <Redirect from='*' to='/' />

    </Router>
)