const INITIAL_STATE = {
  list: [],
  listVan: []
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'VAN_FETCH':
      return { ...state,
        list: action.payload.data
      }
    case 'COMPANY_FETCH':
      return { ...state,
        listVan: action.payload.data
      }
    default:
      return state
  }

}