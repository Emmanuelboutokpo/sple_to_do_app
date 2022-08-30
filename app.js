let tasks = [];
let forms = document.querySelector("form");
let inputs =document.querySelector("input");
let b_container = document.querySelector(".b_container");

const showTasks = () =>{
    b_container.innerHTML = tasks.map((task,id) =>{
           return ` 
           <li> ${task} 
                <div> 
                     <button onclick="editFunction(${id})">Edit</button>
                     <button onclick="deleteFunction(${id})">X</button>
                 </div>  
            </li>`
    }).join(" ")
}

const deleteFunction = (id) =>{
      tasks.splice(id,1);
      showTasks()
}

const editFunction = (id) =>{
     let modify = prompt("Veuillez  modifier " + tasks[id]);
     if (modify != null) {
         tasks.splice(id,1,modify);
         showTasks()
     }
     else{
        showTasks()
     }
}

forms.addEventListener("submit", (e)=>{
    e.preventDefault();
    if (inputs.value != "") {
        tasks.push(inputs.value);
        forms.reset()
        showTasks()
      }else{
         alert("Veuillez renseigner le champs !")
      }
})