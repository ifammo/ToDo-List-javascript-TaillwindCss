
function customTask(message){
    return ` <div class="flex justify-between mt-5  " >
    <!--Single Tasks-->
    <div class="flex items-center gap-2">
        <button class=" w-8 bg-slate-200 rounded-full p-1 ">
            <i class="fa-solid fa-check"></i>
        </button>
        
        <h2>${message}</h2>
    </div>
    <div class="flex gap-2">
        <button class="text-slate-500 hover:bg-slate-500 hover:text-white w-10 rounded-full p-2 border">
            <i class="fa-solid fa-pen"></i>
        </button>
        <button class="text-slate-500 hover:bg-slate-500 hover:text-white w-10 rounded-full p-2 border">
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