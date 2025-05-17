
       import React from 'react'
         import { incAction1,decAction1,resAction1,incAction2,decAction2,resAction2 } from './actions'
         import { useSelector,useDispatch } from 'react-redux'
         const App = () => {
          const r1=useSelector(state=>state.r1)
          const r2=useSelector(state=>state.r2)
           const dispatch=useDispatch()
           return (
             <div>
                <div>
                  <p>{r1.name}: {r1.score}</p>
                  <button onClick={()=>dispatch(incAction1(4))}>+</button>
                  <button onClick={()=>dispatch(decAction1())}>-</button>
                  <button onClick={()=>dispatch(resAction1())}>Res</button>
               </div>

                <div>
                  <p>{r2.name}: {r2.score}</p>
                  <button onClick={()=>dispatch(incAction2(2))}>+</button>
                  <button onClick={()=>dispatch(decAction2(3))}>-</button>
                  <button onClick={()=>dispatch(resAction2())}>Res</button>
               </div>
             </div>
           )
         }
         
         export default App

