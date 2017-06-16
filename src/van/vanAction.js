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
  const request = axios.get(`${BASE_URL}/van/findall`)
  return {
    type: 'VAN_FETCH',
    payload: request
  }
}

export function getCompanys() {
  const request = axios.get(`${BASE_URL}/company/findall`)
  return {
    type: 'COMPANY_FETCH',
    payload: request
  }
}

export function create(values) {
  // values.company = parseInt(values.company)
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
    axios.post(`${BASE_URL}/van/${method}${id}`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação realizada com sucesso.')
        dispatch(init())
      })
      .catch(e => {
        if (e.response.data.error) {
          toastr.error('Error', e.response.data['error'])
        } else {
          Object.keys(e.response.data).forEach(error => toastr.error('O campo abaixo é obrigatório', error))

        }
      })

  }

}

export function showUpdate(van) {
  const van2 = {}
  van2.board = van._00
  van2.capacity = van._01
  van2.occupants = van._02
  van2.company = van._03
  van2.neighborhoods = van._04
  van2.city = van._05
  van2._id = van._id
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('VanForm', van2)

  ]

}
// refatorar método
export function showDelete(van) {
  const van2 = {}
  van2.board = van._00
  van2.capacity = van._01
  van2.occupants = van._02
  van2.company = van._03
  van2.neighborhoods = van._04
  van2.city = van._05
  van2._id = van._id
  return [
    showTabs('tabDelete'),
    selectTab('tabDelete'),
    initialize('VanForm', van2)

  ]

}

export function init() {
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('VanForm', INITIAL_VALUES)
  ]
}