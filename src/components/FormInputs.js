import PersonalInfo from "./PersonalInfo"
import SelectPlan from "./SelectPlan"
import Addons from "./Addons"
import Summary from "./Summary"
import Success from "./Success"

const FormInputs = ({page,setPage, display}) => {

  




  return (
    <div>
        {display[page]}
    </div>
  )
}

export default FormInputs