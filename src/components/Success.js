import React from 'react'
import check from '/Projects/formpage/src/images/check-solid.svg'
import thank from '/Projects/formpage/src/images/icon-thank-you.svg'

const Success = () => {
  return (
    <div className='successm'>
        <img src={thank} alt="" />
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at Olomuvokee@gmail.com</p>
    </div>
  )
}

export default Success