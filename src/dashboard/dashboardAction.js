import axios from 'axios'
const BASE_URL = 'https://fatauni.herokuapp.com/fata/v1/public'
// const BASE_URL = 'http://localhost:1510/fata/v1/public'

export function getListCompany() {
  const request = axios.get(`${BASE_URL}/van/findall`)
  return {
    type: 'VANS_TEST_FETCH',
    payload: request
  }
}