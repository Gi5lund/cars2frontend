import { API_URL} from "../../settings.js"
import { handleHttpErrors,makeOptions } from "../../utils.js"


const URL = API_URL + "/members"


export function initSignup() {
    addMember()
}
function addMember(){
   // evt.preventDefault()
document.getElementById("btn-submit-user").addEventListener("click",getData)
}
  
 
  async function getData(evt) {
    evt.preventDefault;
    // Get the form element
    const form = document.getElementById("form-id") ;
  
    // Create an empty object to store the data
   const formData = {};
   const inputfields= form.querySelectorAll("input")
   inputfields.forEach(function(input) {
    formData[input.name] = input.value;
  });
    
   
    const memberrequest={
        username:formData.username,
        email:formData.email,
        password:formData.password,        
        firstName:formData.firstName,
        lastName:formData.lastName,
        street:formData.street,
        city:formData.city,
        zip:formData.zip

    }
    console.log(JSON.stringify(memberrequest))
  
    try {
       const member= await fetch(API_URL+"/user-with-role",makeOptions("POST",memberrequest,false)).then(m=>handleHttpErrors(m))
       addRole(member)
          }catch (err){
              console.log(err);
          }   
         
           
        
        
   
  }

  async function addRole(member){
    try{
        const role = await fetch(API_URL+"/user-with-role",makeOptions("POST",member,false)).then(h=>handleHttpErrors(h))
    window.router.navigate("/login")

    }catch(err){
        console.log(err)
    }
    
  }
  