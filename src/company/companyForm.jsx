import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import normalizePhone from '../common/form/normalizePhone'

class CompanyForm extends Component {
  render() {
    const { handleSubmit } = this.props
    return (

      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name="name" component={labelAndInput} label='Nome' cols='12 8' placeholder="Nome da empresa" />
          <Field name="registration" component={labelAndInput} label='CNPJ/CPF' cols='8 6' type="text" placeholder="CPNJ/CPF" />
          <Field name="phone" component={labelAndInput} label='Telefone' type='tel' cols='8 6' placeholder="Telefone" normalize={normalizePhone} />
          <Field name="email" component={labelAndInput} label='E-mail' type="email" cols='12 8' placeholder="Email" />
        </div>
        <div className='box-footer'>
          <button className='btn btn-primary'>Submit</button>
        </div>
      </form>

    )
  }
}

export default reduxForm({ form: 'companyForm' })(CompanyForm)