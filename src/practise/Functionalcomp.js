import React from 'react';
import "./Style.css";

const Functionalcomp=()=>{
	return(
		<div>

        <div className='container1'>
        <h1 className='head1'>This is created using Functional Component </h1>
        <p className='para1'>This is done using External Css</p>
        <p Style={'color:blue;margin-top:10px'}>This is done using Internal Css</p>
        </div>

		</div>
		)
};
export default Functionalcomp;