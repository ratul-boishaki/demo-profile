const x=document.querySelector("#menu-bar");
const y=document.querySelector("#menu");


x.addEventListener("click",()=>{
    if(
        y?.className=="hidden"){
            y.classList.remove("hidden")
        }else{
            y.classList.add("hidden")
        }
   
})