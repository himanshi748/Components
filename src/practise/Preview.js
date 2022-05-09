import React, { useState } from 'react';
import ClassComponent from './Classcomponent';
import Functionalcomp from './Functionalcomp';
import "./Style.css"

const Preview = () => {

const [name,SetName]=useState(false);

const [name2,SetName2]=useState(false);


  return (
  <>
  
  <div className='container'>
  <h1 className='head'>Styling using Fuctional and ClassComponent</h1>

  <button className='box1' onClick={()=>{name?SetName(false):SetName(true)}}>To see styling in functional component</button>
  <button className='box2' onClick={()=>{name2?SetName2(false):SetName2(true)}}>To see styling in class component</button>
  
  </div>
  
  {name&&<Functionalcomp />}
  {name2&&<ClassComponent />}



  </>

  )
}

export default Preview;
