import { useState } from 'react';
import { useReducer } from 'react';
import './style.css';




   

export const App = () => {

   const [valor, setValue] = useState("")

   const backSpace = () => {
     try {
       setValue(valor.slice(0,-1))
     } catch (error) {
       
     }    
    }
   const calculate = () => {
      try {
        setValue(eval(valor))
      } catch (error) {
        
      }
   }
   const reset = () => {
    try {
      setValue("")
    } catch (error) {
      
    }
   }
      

   
  return (
    <div className="calculator">
      <div className="output">
        <div className="previous-operand">{valor}</div>
        <div className="current-operand">{valor}</div>
      </div>
      <button className="span-two" value={'AC'} onClick={(e) => reset()}>AC</button>
      <button value={'C'} onClick={(e) => backSpace()}>DEL</button>
      <button value={'/'} onClick={(e) => setValue(valor + e.target.value)}>/</button>
      <button value={1} onClick={(e) => setValue(valor + e.target.value)}>1</button>
      <button value={2} onClick={(e) => setValue(valor + e.target.value)} >2</button>
      <button value={3} onClick={(e) => setValue(valor + e.target.value)}>3</button>
      <button value={'*'} onClick={(e) => setValue(valor + e.target.value)}>X</button>
      <button value={4} onClick={(e) => setValue(valor + e.target.value)}>4</button>
      <button value={5} onClick={(e) => setValue(valor + e.target.value)}>5</button>
      <button value={6} onClick={(e) => setValue(valor + e.target.value)}>6</button>
      <button value={'+'} onClick={(e) => setValue(valor + e.target.value)}>+</button>
      <button value={7} onClick={(e) => setValue(valor + e.target.value)}>7</button>
      <button value={8} onClick={(e) => setValue(valor + e.target.value)}>8</button>
      <button value={9} onClick={(e) => setValue(valor + e.target.value)}>9</button>
      <button value={'-'} onClick={(e) => setValue(valor + e.target.value)}>-</button>
      <button value={'.'} onClick={(e) => setValue(valor + e.target.value)}>.</button>
      <button value={0} onClick={(e) => setValue(valor + e.target.value)}>0</button>
      <button className="span-two" value={'='} onClick={(e) => calculate()}>=</button>
    </div>
  )
}
      
      











          
        

