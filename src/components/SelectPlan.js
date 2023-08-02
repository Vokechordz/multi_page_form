import Arcade from '../images/icon-arcade.svg'
import Pro from '../images/icon-pro.svg'
import Advanced from '../images/icon-advanced.svg'
import { useState, useEffect } from 'react'
import useFormContext from '../hooks/useFormContext'

const SelectPlan = ({data, setData,toggleChecked, duration,setDuration,handleToggleButton, setToggleChecked,handleToggle,price,setPrice}) => {




  return (
    <div className='SelectPlan'>
        <h1>Select your plan</h1>
        <p className='planp'>You have the option of monthly or yearly billing</p>
        <div className="toggle">
        <p style={toggleChecked? {color: 'hsla(213, 96%, 18%,0.5)'} : {color:'hsl(213, 96%, 18%)'}}>Monthly</p>
        <label className="switch">
        <input type="checkbox" checked={toggleChecked} value={duration}  onChange={handleToggleButton} />
        <span className="slider round"></span>
        </label>
        <p style={!toggleChecked? {color: 'hsla(213, 96%, 18%,0.5)'} : {color:'hsl(213, 96%, 18%)'}}>Yearly</p>
        </div>
        <div className="planwrapper">
        <div className='arcadeall'>  
          <img src={Arcade} alt="" />
         <div className="arcadedown">
           <h5>Arcade</h5>
          <p className='planp'>${toggleChecked? '12' : '9'}/{toggleChecked? 'yr' : 'mo'}</p>
          <p className='planpp'>{toggleChecked? '2months free' : null}</p>
         </div>
         <input className='radioinput' type="radio"  value={toggleChecked? 12:9} name='plan' id='Arcade' onTouchStart={handleToggle} onChange={handleToggle}/>
        </div>
        <div className='arcadeall'>
          <img src={Advanced} alt="" />
         <div className="arcadedown">
           <h5>Advanced</h5>
           <p className='planp'>${toggleChecked? '15' : '12'}/{toggleChecked? 'yr' : 'mo'}</p>
          <p className='planpp'>{toggleChecked? '2months free' : null}</p>
         </div>
         <input className='radioinput' type="radio" name='plan' value={toggleChecked? 15:12}  id='Advanced' onTouchStart={handleToggle} onChange={handleToggle}/>
        </div>
        <div className='arcadeall'>
          <img src={Pro} alt="" />
         <div className="arcadedown">
           <h5>Pro</h5>
          <p className='planp'>${toggleChecked? '19' : '15'}/{toggleChecked? 'yr' : 'mo'}</p>
          <p className='planpp'>{toggleChecked? '2months free' : null}</p>
         </div>
         <input className='radioinput' type="radio"  name='plan' value={toggleChecked? 19:15} id='Pro' onTouchStart={handleToggle} onChange={handleToggle}/>
        </div>
        </div>

       
        </div>
  )
}

export default SelectPlan