import { combineReducers } from "redux";

import TaskReducer from '../reducers/TaskReducer'

const rootReducer = combineReducers({task:TaskReducer})

export default rootReducer