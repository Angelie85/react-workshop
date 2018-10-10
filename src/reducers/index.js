import { combineReducers } from 'redux'
import * as actionConstants from '../actions'

const init_state={
  labelColor: "#000000",
  newsItems:[]
}

const myReducer = (state=init_state, action)=>{
  switch (action.type){
    case actionConstants.ON_BTN_CLK:
      return {...state, labelColor:action.color}
    case actionConstants.FETCH_NEWS_SUCCESS:
      return {...state,newsItems:action.payload }
    default:
      return state
  }

}

const mainReducer = combineReducers({myReducer})

export default mainReducer