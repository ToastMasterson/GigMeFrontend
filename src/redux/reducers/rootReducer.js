import { combineReducers } from 'redux'
import authReducer from  './auth'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({ firebaseReducer, authReducer })

export default rootReducer