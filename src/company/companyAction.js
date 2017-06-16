import axios from 'axios'
import {
  toastr
} from 'react-redux-toastr'
import {
  reset as resetForm,
  initialize
} from 'redux-form'
import {
  showTabs,
  selectTab
} from '../common/tab/tabActions'

const BASE_URL = 'https://fatauni.herokuapp.com/fata/v1/public'
// const BASE_URL = 'http://localhost:1510/fata/v1/public'

const INITIAL_VALUES = {}

export function getList() {
  const request = axios.get(`${BASE_URL}/company/findall`)

  return {
    type: 'COMPANY_FETCH',
    payload: request
  }
}

export function create(values) {
  return submit(values, 'new')
}

export function update(values) {
  return submit(values, 'update/')
}

export function remove(values) {
  return submit(values, 'delete/')

}

function submit(values, method) {
  return dispatch => {
    const id = values._id ? values.id : ''
    axios.post(`${BASE_URL}/company/${method}${id}`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação realizada com sucesso.')
        dispatch(init())
      })
      .catch(e => {
        Object.keys(e.response.data).forEach(error => toastr.error('O campo abaixo é obrigatório', error))
      })

  }

}

export function showUpdate(company) {
  const company2 = {}
  company2.name = company._00
  company2.registration = company._01
  company2.phone = company._03
  company2.email = company._04
  company2._id = company._id
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('companyForm', company2)

  ]

}
// refatorar método
export function showDelete(company) {
  const company2 = {}
  company2.name = company._00
  company2.registration = company._01
  company2.phone = company._03
  company2.email = company._04
  company2._id = company._id
  return [
    showTabs('tabDelete'),
    selectTab('tabDelete'),
    initialize('companyForm', company2)

  ]

}

export function init() {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('companyForm', INITIAL_VALUES)
  ]
}