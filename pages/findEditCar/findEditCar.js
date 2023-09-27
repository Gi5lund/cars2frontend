import { API_URL} from "../../settings.js"
import { handleHttpErrors } from "../../utils.js"

//Add id to this URL to get a single user
const URL = `${API_URL}/cars`


// @ts-ignore
export async function initFindEditCar(match){
    //empty field 
    document.getElementById("car-id-input").value=""
    document.getElementById("btn-fetch-car").onclick=getCar
    document.getElementById("btn-submit-edited-car").onclick=editCar
    document.getElementById("btn-delete-car").onclick=deleteCar
    const id = document.getElementById("car-id-input").value
    

   async function getCar(){
   const id = document.getElementById("car-id-input").value
    try{
    const car=await fetch(URL+"/"+id).then(handleHttpErrors) 
    document.getElementById("car-id").value=car.id
    document.getElementById("brand").value=car.brand
    document.getElementById("model").value=car.model
    document.getElementById("price-pr-day").value=car.pricePrDay
    document.getElementById("best-discount").value=car.bestDiscount
   }catch(err){
       console.log(err)
   }}

   async function editCar(){
   const id = document.getElementById("car-id-input").value
   const editRequest={
       brand:document.getElementById("brand").value,
       model:document.getElementById("model").value,
       pricePrDay:document.getElementById("price-pr-day").value,
       bestDiscount:document.getElementById("best-discount").value
   }
   const fetchOptions = {}
   fetchOptions.method = "PUT"
   fetchOptions.headers = { "Content-Type": "application/json" }
   fetchOptions.body = JSON.stringify(editRequest)
    try{
    const car=await fetch(URL+"/"+id,fetchOptions)    
    .then(handleHttpErrors)    
  
}catch(err){
        console.log(err)
   }}
   async  function deleteCar() {   
    const car=await fetch(URL+"/"+id,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        }
    }).then(handleHttpErrors)
    
  
    document.getElementById("car-id").value=car.id
}

}