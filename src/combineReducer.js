
import { combineReducers } from 'redux';
import reducer1 from './Reducer1';
import reducer2 from './Reducer2';

 const reducer = combineReducers({
   
    r1:reducer1,
    r2:reducer2
  

})
export default reducer


   
  /*import { combineReducers } from "redux";
  import user1Reducer from './Reducer1'
  import user2Reducer from './Reducer2'
  const rootReducer=combineReducers({
       user1:user1Reducer,
       user2:user2Reducer



  })
  export default rootReducer*/
     


 