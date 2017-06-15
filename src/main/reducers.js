import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DasboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import companyReducer from '../company/companyReducer'

const rootReducer = combineReducers({
  dashboard: DasboardReducer,
  tab: TabReducer,
  company: companyReducer,
  form: formReducer,
  toastr: toastrReducer
})

export default rootReducer