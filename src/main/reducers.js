import {
  combineReducers
} from 'redux'

import DasboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
  dashboard: DasboardReducer,
  tab: TabReducer
})

export default rootReducer