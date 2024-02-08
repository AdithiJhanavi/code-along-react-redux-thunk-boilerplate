import {createStore, applyMiddleware } from "redux";
import {thunk} from "redux-thunk";

const initialState = {
  loading: false,
  users: [],
  error: ''
};

const userReducer = (state = initialState, action) => {
      if(action.type="FETCH_USER_SUCCESS"){
        return{
           ...state,
           users:action.payload
        }
      }else if(action.type="GO_DATA"){
        return{

          ...state,
          users:[]
        }

      }
      return state;
  }

const store = createStore(userReducer, applyMiddleware(thunk));
export default store;