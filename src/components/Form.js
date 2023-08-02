import { useState, useEffect, useRef } from "react"
import bgsidebardesktopsvg from '/Projects/formpage/src/images/bg-sidebar-desktop.svg'
import bgsidebarmobilesvg from '/Projects/formpage/src/images/bg-sidebar-mobile.svg'
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import Addons from "./Addons";
import Summary from "./Summary";
import FormInputs from "./FormInputs";
import Success from "./Success";


const Form = () => {



const nameRegex= /^[a-zA-Z]{3,} [a-zA-Z]{3,}$/
const emailRegex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const telRegex= /^(\+234|0)[789][01]\d{8}$/

const [data, setData]= useState({
  name: "",
  email:"",
  tel:"",
  selectedValue: "",
  duration: "",
  onlineService: false,
  largerStorage:false,
  customizableProfile: false
})

const [validName, setValidName]= useState(false)
const [validEmail, setValidEmail]= useState(false)
const [validTel, setValidTel]= useState(false)


const [page, setPage]= useState(1)

const handleNext = () => {
  setPage(prev => prev + 1)
}
const handlePrev = () => {
  setPage(prev => prev - 1)
}

useEffect(() => {
 const nameResult= nameRegex.test(data.name)
 setValidName(nameResult)
},[data.name])

useEffect(() => {
 const emailResult= emailRegex.test(data.email)
 setValidEmail(emailResult)
},[data.email])

useEffect(() => {
 const telResult= telRegex.test(data.tel)
 setValidTel(telResult)
},[data.tel])

const [toggleChecked, setToggleChecked]= useState(true)
const[price, setPrice]= useState()

const handleName=(e)=> {
  setData({...data, [e.target.name]:e.target.value})
  localStorage.setItem("localform", JSON.stringify({...data, [e.target.name]:e.target.value}))
}

const handleAddOns =(e)=> {
  setData({...data, [e.target.name]:e.target.checked})
  localStorage.setItem("localform", JSON.stringify({...data, [e.target.name]:e.target.checked}))
}


const handleToggle=(e)=>{
  setData({...data, selectedValue:e.target.id});
  setPrice(e.target.value)
  localStorage.setItem("localform", JSON.stringify({...data, selectedValue:e.target.id}))
}

const handleToggleButton=(e)=> {
  setData({...data, duration:e.target.value})
  setToggleChecked(e.target.checked);
  if (!toggleChecked) {
    setData({...data, duration:"Yearly"})
  } else {
    setData({...data, duration:"Monthly"})
  }
  localStorage.setItem("localform", JSON.stringify({...data, duration:toggleChecked? "Yearly": "Monthly"}))
}

useEffect(()=> {
  const storedForm= localStorage.getItem("localform")
  if (storedForm) {
    setData(JSON.parse(storedForm))
  }
},[])

const totalPrice= parseInt(price) + (data.onlineService? (toggleChecked? 30:3):0) + (data.largerStorage? (toggleChecked? 35:5):0) + (data.customizableProfile? (toggleChecked? 45:8):0)
const newData= Object.assign({}, data, {Totalprice:totalPrice})

const handleSubmit=(e)=> {
 console.log(JSON.stringify(newData))
 setPage(5)
}






  const display= {
    1: <PersonalInfo 
    data={data}
    setData={setData}
    validEmail={validEmail}
    validName={validName}
    validTel={validTel}
    handleName={handleName}
    />,
    2: <SelectPlan 
    data={data}
    setData={setData}
    toggleChecked={toggleChecked}
    setToggleChecked={setToggleChecked}
    price={price}
    setPrice={setPrice}
    handleToggle={handleToggle}
    handleToggleButton={handleToggleButton}
    />,
    3: <Addons 
    toggleChecked={toggleChecked}
    setToggleChecked={setToggleChecked}
    data={data}
    setData={setData}
    handleAddOns={handleAddOns}
    />,
    4: <Summary 
    data={data}
    toggleChecked={toggleChecked}
    price={price}
    totalPrice={totalPrice}
    page={page}
    setPage={setPage}
    />,
    5: <Success />
}  
 




const canNextPage1= validName && validEmail && validTel
const disablePage2= !data.selectedValue



  return (
    <div className="formdiv">
        <div className="divlist">
        <img className="bgsidebardesktopsvg" src={bgsidebardesktopsvg} alt="" />
        <img className="bgsidebarmobilesvg" src={bgsidebarmobilesvg} alt="" />
        <div className="steplist">
          <ul className="unorderedlist" >
          <li>
           <div className="firstcircle">
              <div  className={page===1 ? 'numberonee': 'numberone'  }>1</div>
              <div className="stepinfo">
                <h6>STEP 1</h6>
                <p>YOUR INFO</p>
              </div>
        </div>
         </li>
          <li>
           <div className="firstcircle">
              <div className={page===2 ? 'numberonee': 'numberone'  }>2</div>
              <div className="stepinfo">
                <h6>STEP 2</h6>
                <p>SELECT PLAN</p>
              </div>
        </div>
         </li>
          <li>
           <div className="firstcircle">
              <div className={page===3 ? 'numberonee': 'numberone'  }>3</div>
              <div className="stepinfo">
                <h6>STEP 3</h6>
                <p>ADD-ONS</p>
              </div>
        </div>
         </li>
          <li>
           <div className="firstcircle">
              <div className={page===4 || page===5 ? 'numberonee': 'numberone'  }>4</div>
              <div className="stepinfo">
                <h6>STEP 4</h6>
                <p>SUMMARY</p>
              </div>
        </div>
         </li>
          </ul>
          
        </div> 
        </div>
    



<div className="seconddiv">
  <div className="innerdiv">
    <FormInputs 
    page={page}
    setPage={setPage}
    display={display}
    />
  </div>

  <div className="buttondiv">
    {page >1 ? <button type='button' style={page===5? {position:'absolute', left:'-9999999px'}:null} className="backbutton" onClick={handlePrev}>Go back</button>: null}
    <button  type='button' className="nextbutton" onClick={handleNext} disabled={page===1? !canNextPage1 : null ||(page===2 && disablePage2 ) }
    style={(page===1 && !canNextPage1) || (page===2 && disablePage2)? {cursor:'not-allowed', backgroundColor:'hsla(213, 96%, 18%,0.5)'} : null || page>3? {position:'absolute',top:'-999999px'}:null}
    >Next step</button>
    <button style={page===4? null:{position:'absolute', top:'-9999999px'}} onClick={handleSubmit} type='submit' className="submitbutton">Confirm</button>

  </div>
</div>





    </div>
  )
}

export default Form  