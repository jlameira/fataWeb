import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'https://fatauni.herokuapp.com/fata/v1/public'

export function getList() {
  const request = axios.get(`${BASE_URL}/company/findall`)

  return {
    type: 'COMPANY_FETCH',
    payload: request
  }
}

export function create(values) {
  return dispatch => {
    axios.post(`${BASE_URL}/company/new`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação realizada com sucesso.')
        dispatch([
          resetForm('companyForm'),
          getList(),
          selectTab('tabList'),
          showTabs('tabList', 'tabCreate')
        ])
      })
      .catch(e => {
        Object.keys(e.response.data).forEach(error => toastr.error('O campo abaixo é obrigatório', error))
      })

  }
}