import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import Dropdown from 'react-dropdown'
const { DOM: { input, select, textarea } } = React

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import labelAndInput from '../common/form/labelAndInput'
import labelAndDropDown from '../common/form/labelAndDropDown'

import { init, getCompanys } from './vanAction'

class VanForm extends Component {

  componentWillMount() {
    this.props.getCompanys()

  }
  render() {


    const { handleSubmit, readOnly } = this.props
    const options = this.props.listVan
    console.log(options)
    return (

      <form role='form' onSubmit={handleSubmit}>
        <div className='box-body'>
          <Field name="board" component={labelAndInput} readOnly={readOnly} label='Placa' cols='12 8' placeholder="Placa da Van" />
          <Field name="capacity" component={labelAndInput} readOnly={readOnly} label='Capacidade' cols='8 6' type="text" placeholder="Capacidade Van" />
          <Field name="occupants" component={labelAndInput} readOnly={readOnly} label='Ocupantes' type='text' cols='8 6' placeholder="Ocupantes" />
          <Field name="company" listCompany={options} component={labelAndDropDown} label='Empresa' className='12 8' placeholder="Empresa" />
          {/*<Field name="company" component={labelAndInput} readOnly={readOnly} label='Empresa' type="text" cols='12 8' placeholder="Empresa reponsável" />*/}
          <Field name="neighborhoods" component={labelAndInput} readOnly={readOnly} label='Bairros' type="text" cols='12 8' placeholder="Bairros" />
          <Field name="city" component={labelAndInput} readOnly={readOnly} label='Cidade' type="text" cols='12 8' placeholder="Cidade Principal" />

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
VanForm = reduxForm({ form: 'VanForm', destroyOnUnmount: false })(VanForm)
const mapStateToProps = state => ({ listVan: state.van.listVan })
const mapDispatchToProps = dispatch => bindActionCreators({ init, getCompanys }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(VanForm)