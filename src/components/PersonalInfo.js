import { useState, useRef, useEffect } from "react"
import useFormContext from "../hooks/useFormContext"



const PersonalInfo = ({data, setData,validEmail, validName, validTel,handleName}) => {



const nameRef= useRef()
useEffect(() => {
  nameRef.current.focus()
 },[])

 



  return (
    <div className="PersonalInfo">
            <h1>Personal info</h1>
    <p>please provide your name, email address and phone number</p>
    <form action="" className="PersonalInfoForm"> 
      <div style={{display:'flex'}}>
      <label htmlFor="name">Name</label>
      <p style={{marginLeft:'auto', color:'red'}} className={data.name && !validName? 'validname':'offscreen'}>Enter a valid name</p>
      </div>
      <input required ref={nameRef} type="text" name="name" placeholder="e.g. Voke Olomu" value={data.name} onChange={handleName} />
      <div style={{display:'flex'}}>
      <label required htmlFor="email">Email Address</label>
      <p style={{marginLeft:'auto', color:'red'}} className={data.email && !validEmail? 'validname' : 'offscreen' }>Enter a valid email address</p>
      </div>
      <input required type="text" name="email" placeholder="e.g. Olomuvokee@gmail.com" value={data.email} onChange={handleName}/>
      <div style={{display:'flex'}}>
      <label htmlFor="">Phone Number</label>
      <p style={{marginLeft:'auto', color:'red'}} className={data.tel && !validTel ? 'validname': 'offscreen' }>Enter a valid phone number</p>
      </div>
      <input required type="text" name="tel" placeholder="e.g. +234 7035 382 476" value={data.tel} onChange={handleName}/>
    </form>
    </div>
  )
}

export default PersonalInfo