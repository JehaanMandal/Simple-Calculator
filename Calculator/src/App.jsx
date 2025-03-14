
import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [displayVal, setDisplayVal] = useState("")
  const [isHovered, setIsHovered] = useState(false)

  const renderDisplay = (inp)=>{
     setDisplayVal((prevVal)=> prevVal + inp)
  }

  const Clear = ()=>{
     setDisplayVal("")
  }
    

  const Output = ()=>{
    setDisplayVal(eval(displayVal))
  }


  return (

    <div className=' w-full h-screen justify-center flex flex-col items-center' style={{backgroundColor:"#1a2a2a"}}>
      <h1 className='text-4xl my-4 text-cyan-200 font-bold animate-pulse' style={{textShadow: "0px 5px 30px gray"}}>Calculator</h1>
      <div className='h-auto flex sm:w-80  md-w-100 lg:w-120 justify-center rounded-4xl my-3' style={{ boxShadow: "0px 5px 30px #11beb6"}}>
        <div >
        <input type="text"
        value={displayVal}
        placeholder='JM'
        readOnly
        className='text-2xl text-white sm:max-w-fit sm:mx-5 sm:p-4 md:mx-6 md:p-6 border border-white w-full p-6 mt-10 rounded-2xl hover:border-emerald-800 hover:border-2 cursor-pointer'
        id='display' 
         />
        <div className='grid grid-cols-4 gap-3 p-5'>
         
      <button
      style={{color: "orange", fontSize: "2rem", fontWeight: "bolder"}}
       className='shape' onClick={()=>renderDisplay("+")}>+</button>
      <button 
       style={{color: "orange", fontSize: "3rem", paddingBottom: "8px", fontWeight: "bolder"}}
      className='shape' onClick={()=>renderDisplay("-")}>-</button>
      <button
       style={{color: "orange", fontSize: "3rem", paddingTop: "18px", fontWeight: "bolder"}}
       className='shape' onClick={()=>renderDisplay("*")}>*</button>
      <button
       style={{color: "orange", fontSize: "2rem", fontWeight: "bolder"}}
       className='shape' onClick={()=>renderDisplay("/")}>/</button>
      <button className='shape' onClick={()=>renderDisplay("7")}>7</button>
      <button className='shape' onClick={()=>renderDisplay("8")}>8</button>
      <button className='shape' onClick={()=>renderDisplay("9")}>9</button>
      <button 
       style={{color: "orange", fontSize: "2rem", fontWeight: "bolder"}}
      className='shape' onClick={()=>renderDisplay("%")}>%</button>
      <button className='shape' onClick={()=>renderDisplay("4")}>4</button>
      <button className='shape' onClick={()=>renderDisplay("5")}>5</button>
      <button className='shape' onClick={()=>renderDisplay("6")}>6</button>
      <button className='shape'
      style={{color: "orange", 
        fontFamily: "Arial"
        
      }}
       onClick={Clear}>C</button>
      
      <button className='shape' onClick={()=>renderDisplay("1")}>1</button>
      <button className='shape' onClick={()=>renderDisplay("2")}>2</button>
      <button className='shape' onClick={()=>renderDisplay("3")}>3</button>
      <button 
      style={{backgroundColor:isHovered?"#53918d": "orange", fontSize: "2rem", color: "#e9d6da"}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='shape' onClick={Output}>=</button>
      <button className='shape'
       onClick={()=>renderDisplay("0")}>0</button>
       <button className='shape' onClick={()=>renderDisplay(".")}>.</button>

      </div>

      </div>
    </div>
    </div>
  )
}
