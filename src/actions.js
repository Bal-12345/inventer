
export const incAction1=(value)=>async dispatch=>{

         dispatch({
          type:'INCREMENT-1',
          payload:value

         })

}

/*export const incActionn=(value)=>async dispatch=>{

  dispatch({
   type:'INCREMENTN',
   payload:value

  })

}*/

export const decAction1=()=>async dispatch=>{

  dispatch({
   type:'DECREMENT-1'
  })

}


export const resAction1=()=>async dispatch=>{

  dispatch({
   type:'RESET'
  })

}


export const incAction2=(value)=>async dispatch=>{

  dispatch({
   type:'INCREMENT-2',
   payload:value

  })

}


export const decAction2=(value)=>async dispatch=>{

  dispatch({
   type:'DECREMENT-2',
   payload:value
  })

}


export const resAction2=()=>async dispatch=>{

  dispatch({
   type:'RESET2'
  })

}
