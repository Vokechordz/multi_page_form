import React from 'react'
import useFormContext from '../hooks/useFormContext'

const Summary = ({data,toggleChecked,price, totalPrice,page,setPage}) => {



  return (
    <div className='summary'>
      <h1>Finishing up</h1>
      <p className='planp'>Double check everything looks OK before confirming</p>
      <div className='arcadediv'>
        <div className='arcadediv1'>
          <div className='arcadediv12'>
          <h4>{data.selectedValue} ({data.duration})</h4>
          <p><a href="">change</a></p>
          </div>
          <p className='arcadedivp'>${price}/{toggleChecked? 'yr':'mo'}</p>
        </div>
        <div className='arcadediv2'>
          <div className='arcadediv23'>
          <p className='planp'>{data.onlineService? 'Online service':null}</p>
          <p style={!data.onlineService? {visibility:'hidden'}:null} className='lastp'>+${toggleChecked? 30:3}/{toggleChecked? 'yr':'mo'}</p>
          </div>
          <div className='arcadediv23'>
          <p className='planp'>{data.largerStorage? 'Larger storage':null}</p>
          <p style={!data.largerStorage? {visibility:'hidden'}:null} className='lastp'>+${toggleChecked? 35:5}/{toggleChecked? 'yr':'mo'}</p>
          </div>
          <div className='arcadediv23'>
          <p className='planp'>{data.customizableProfile? 'Customizable profile':null}</p>
          <p style={!data.customizableProfile? {visibility:'hidden'}:null} className='lastp'>${toggleChecked? 45:8}/{toggleChecked? 'yr':'mo'}</p>
          </div>
        </div>
      </div>
      <div className='lastarcadediv'>
      <p className='planpp'>Total(per {toggleChecked? 'year':'month'})</p>
      <p className='lastarcadedivp'>+${totalPrice}/{toggleChecked? 'yr':'mo'}</p>
      </div>
    </div>
  )
}

export default Summary