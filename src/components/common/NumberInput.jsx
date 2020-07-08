import React, { Component } from "react";
import { Field } from "react-final-form";


const inc = (v, max) => v < max ? ++v : v
const dec = (v, min) => v > min ? --v : v


export const NumberInput = ({ value , min = -Infinity, max = Infinity, onChange = () => null}) => { 

const change = (e, v) => {
  e.target.value = v
  onChange(e)
}

return <>
 <button onClick={(e) => change(e, dec(value, min))}>-</button>
  <input  type="number" value={value} min={min} max={max} onChange={e => change(e, e.target.value)}/> 
  
   <button onClick={(e) => change(e, inc(value, max))}>+</button>
</>
}