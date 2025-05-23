
       import React from 'react'
         import { incAction1,decAction1,resAction1,incAction2,decAction2,resAction2 } from './actions'
         import { useSelector,useDispatch } from 'react-redux'
         const App = () => {
          const r1=useSelector(state=>state.r1)
          const r2=useSelector(state=>state.r2)
           const dispatch=useDispatch()
           return (
             <div>
                <div style={{
  display: 'flex',
  flexDirection: 'column', // Stack children vertically
  justifyContent: 'center',
  alignItems: 'center',
  height: '200px',
  width: '200px',
  borderRadius: '50%',
  background: 'blue',
  color: 'black'
}}>
  <div>{r1.name}</div>
  <span>Marks: {r1.score}</span>

  {/* Optional: wrap buttons in another div for better spacing */}
  <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
    <button onClick={() => dispatch(incAction1(4))}>+</button>
    <button onClick={() => dispatch(decAction1())}>-</button>
    <button onClick={() => dispatch(resAction1())}>Res</button>
  </div>
</div>


                <div style={{
  display: 'flex',
  flexDirection: 'column', // Stack children vertically
  justifyContent: 'center',
  alignItems: 'center',
  height: '200px',
  width: '200px',
  borderRadius: '50%',
  background: 'black',
  color: 'blue'
}}>
  <div>{r2.name}</div>
  <span>Marks: {r2.score}</span>

  {/* Optional: wrap buttons in another div for better spacing */}
  <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
    <button onClick={() => dispatch(incAction2(4))}>+</button>
    <button onClick={() => dispatch(decAction2())}>-</button>
    <button onClick={() => dispatch(resAction2())}>Res</button>
  </div>
</div>

             </div>
           )
         }
         
         export default App




         //https://invente-mmewemhmq-balreddys-projects.vercel.app/