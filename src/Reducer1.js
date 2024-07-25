
 const initialState={
  name:'bhavesh',
  score:23
 }
export default function reducer1(state=initialState, action){
       const{type,payload} = action
       switch (type) {
        case 'INCREMENT-1':
        return {...state,score:state.score+payload}
        case 'INCREMENTN':
        return {...state,score:state.score+payload}

        case 'DECREMENT-1':
        return {...state,score:state.score-1}
        
        case 'RESET':
        return {...state,score:0}
        
        default:
          return state
        }



}

  /*import { createSlice } from "@reduxjs/toolkit";
  const counterSlice1= createSlice({
    name: 'user1',
    initialState:{
     name:'madhu',
     score:23
     },

      reducers:{
      increment1:(state,action)=>{
            state.score+=action.payload
      },

      decrement1:(state)=>{
        state.score-=1
     }

}
})
export const{increment1,decrement1}=counterSlice1.actions;
export const selectUser1=(state)=>state.user1
export default counterSlice1.reducer*/   
           