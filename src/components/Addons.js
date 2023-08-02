import React from 'react' 
import { useState } from 'react'
import useFormContext from '../hooks/useFormContext'

const Addons = ({data, setData,handleAddOns,toggleChecked,setToggleChecked,checkOne,setCheckOne,checkTwo,setCheckTwo,checkThree,setCheckThree}) => {


  return (
    <div className='Addons'>
        <h1>Pick add-ons</h1>
        <p className='padd'>Add-ons help enhance your gaming experience</p>
        <p>{checkOne}</p>
        <form action="" className='Addonsform'>
          <div className='checkboxdiv'>
          <input type="checkbox" checked={data.onlineService} name='onlineService'  onChange={handleAddOns}/>
            <div className="labelp">
                <label htmlFor="">Online service</label>
                <p>Access to multiplayer games</p>
            </div>
           <p className='mone'>${toggleChecked? '30' : '3'}/{toggleChecked? 'yr' : 'mo'}</p>
          </div>
          <div className='checkboxdiv'>
          <input type="checkbox" checked={data.largerStorage} name='largerStorage' onChange={handleAddOns}/>
            <div className="labelp" on>
                <label htmlFor="">Larger Storage</label>
                <p>Extra 1TB of cloud save</p>
            </div>
           <p className='mone'>${toggleChecked? '35' : '5'}/{toggleChecked? 'yr' : 'mo'}</p>
          </div>
          <div className='checkboxdiv'>
          <input type="checkbox" checked={data.customizableProfile} name='customizableProfile' onChange={handleAddOns}/>
            <div className="labelp">
                <label htmlFor="">Customizable Profile</label>
                <p>Custom theme on your profile</p>
            </div>
           <p className='mone'>${toggleChecked? '45' : '8'}/{toggleChecked? 'yr' : 'mo'}</p>
          </div>
        </form>
    </div>
  )
}

export default Addons