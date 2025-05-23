
const initialState={
  name:'Mithuna',
  score:13
 }
export default function reducer2(state=initialState, action){
       const{type,payload} = action
       switch (type) {
        case 'INCREMENT-2':
        return {...state,score:state.score+payload}
        case 'DECREMENT-2':
        return {...state,score:state.score-1}
        case 'RESET2':
        return {...state,score:0}
    
        default:
        return state
      
        }



}



/*import { createSlice } from "@reduxjs/toolkit";
const counterSlice2= createSlice({
  name: 'user2',
  initialState:{
   name:'balu',
   score:63
   },

    reducers:{
    increment2:(state,action)=>{
          state.score+=action.payload
    },

    decrement2:(state)=>{
      state.score-=1
   }

}
})
export const{increment2,decrement2}=counterSlice2.actions;
export const selectUser2=(state)=>state.user2
export default counterSlice2.reducer*/   
         