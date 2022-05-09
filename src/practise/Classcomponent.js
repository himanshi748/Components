import React, { Component } from 'react';
import './Style.css';

export default class ClassComponent extends Component{
    render(){
        return (
        <>
        
        <div className='container2'>
        <h1 className='head2'>This is created using Class Component </h1>
        <p className='para2'>This is done using External Css</p>
        <p Style={'color:blue;margin-top:10px'}>This is done using Intarnal Css</p>
        </div>

        </>
        )
    }
}