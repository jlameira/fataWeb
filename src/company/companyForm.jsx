import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import labelAndInput from '../common/form/labelAndInput'
import normalizePhone from '../common/form/normalizePhone'

import { init } from './companyAction'

class CompanyForm extends Component {
  render() {
    const { handleSubmit, readOnly } = this.props
    return (

      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name="name" component={labelAndInput} readOnly={readOnly} label='Nome' cols='12 8' placeholder="Nome da empresa" />
          <Field name="registration" component={labelAndInput} readOnly={readOnly} label='CNPJ/CPF' cols='8 6' type="text" placeholder="CPNJ/CPF" />
          <Field name="phone" component={labelAndInput} readOnly={readOnly} label='Telefone' type='tel' cols='8 6' placeholder="Telefone" normalize={normalizePhone} />
          <Field name="email" component={labelAndInput} readOnly={readOnly} label='E-mail' type="email" cols='12 8' placeholder="Email" />
        </div>
        <div className='box-footer'>
          <button type='submit' className={`btn btn-${this.props.submitClass}`}>
            {this.props.submitLabel}
          </button>
          <button type='button' className='btn btn-default'
            onClick={this.props.init} >Cancelar</button>
        </div>
      </form>

    )
  }
}
CompanyForm = reduxForm({ form: 'companyForm', destroyOnUnmount: false })(CompanyForm)

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(null, mapDispatchToProps)(CompanyForm)