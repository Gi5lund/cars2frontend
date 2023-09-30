import { API_URL} from "../../settings.js"
import { handleHttpErrors,makeOptions } from "../../utils.js"


const URL = API_URL + "/members"


export function initSignup() {
    addMember()
}
function addMember(evt){
   // evt.preventDefault()
document.getElementById("btn-submit-car").addEventListener("click",extractFormData)
}
  async function extractFormData(evt,formId) {
    evt.preventDefault()
   
    const signupform = document.getElementById(formId);
    // @ts-ignore
    const formData = new FormData(signupform);
  
    const body = {};
    formData.forEach((value,key) => {
      body[key] = value;
    });

   
    // const options={
    //     method:"POST",
    //     headers: {"Content-Type": "application/json"},
    //     body:JSON.stringify(newCar)
    // }
    fetch(URL,makeOptions("POST",body,false))
    .then(res=>res.json())
    .then(carRespons=>{
        document.getElementsById("carresponse").innerText=JSON.stringify(carRespons,null,3)
    })
  }
