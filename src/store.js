import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import reducer from './combineReducer'
const store = createStore(
reducer,
composeWithDevTools(applyMiddleware(thunk))


)
export default store;


 

  /*import { configureStore } from "@reduxjs/toolkit";
   import rootReducer from "./combineReducer";
  const store = configureStore({

  reducer: rootReducer

  })
  export default store;*/
 

