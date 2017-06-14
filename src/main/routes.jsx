import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import Company from '../company/company'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/van' component={BillingCycle} />
        <Route path='/company' component={Company} />
        <Redirect from='*' to='/' />

    </Router>
)