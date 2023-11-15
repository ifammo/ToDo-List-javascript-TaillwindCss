
function customTask(message){
    return ` <div class="flex justify-between mt-5  " >
    <!--Single Tasks-->
    <div class="flex items-center gap-2">
        <button onclick="chekTask(this)" class=" w-8 bg-slate-200  rounded-full p-1 ">
            <i class="fa-solid fa-check "></i>
        </button>
        
        <h2>${message}</h2>
    </div>
    <div class="flex gap-2">
        <button onclick="updateTask(this)" class="text-slate-500 hover:bg-slate-500 hover:text-white w-10 rounded-full p-2 border">
            <i class="fa-solid fa-pen"></i>
        </button>
        <button onclick="deleteTask(this)" class="text-slate-500 hover:bg-slate-500 hover:text-white w-10 rounded-full p-2 border">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>`
}
function addTask() {
    const input = document.querySelector("input")
    if(input.value==""){
         alert("you must write the taske first");
    }else{
    const tasklist = document.querySelector(".tasklist")
    tasklist.innerHTML +=customTask(input.value)
    input.value=""
    }
   
}
function deleteTask(target){
    target.parentElement.parentElement.remove()
}
function updateTask(target){
   const text =target.parentElement.previousElementSibling.lastElementChild.innerText 
   target.parentElement.previousElementSibling.lastElementChild.innerHTML= `<input type="text" class="update focus:bg-slate-100" onblur="saveinput(this)" value=${text} >`

}

function saveinput(target){
    target.parentElement.innerHTML=`<h2>${target.value}</h2>`
}
function chekTask(target){
    if(target.classList.contains("bg-slate-200")){
        target.classList.remove("bg-slate-200")
        target.classList.add("bg-green-500")
    }else {    
        target.classList.remove("bg-green-500")
        target.classList.add("bg-slate-200")
    }
    
        

    
       
        
       
    
    
}