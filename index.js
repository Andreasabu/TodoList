// input, boton de + para agregar el event listener,la lista (lu), empty
// seleccionamos todos las elementos que necesitamos manipular
const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul")
const empty = document.querySelector(".empty");

// crear una funcion para pushear los elementos a la lista

addBtn.addEventListener("click", (e) => {
    e.preventDefault();   // e de evento, prevenir que el formulario se refresque

    const text = input.value; // el texto de lista
    if (text !== "") {
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.textContent = text; // reasignamos su valor a text

       // li.classList.add("esta.es.una.clase")

        li.appendChild(p); // hacemos a p hijos del li y a los li hijos de ul
        li.appendChild(addDeleteBtn()); //hoisting
        ul.appendChild(li);

        input.value = "";
        empty.style.display = "none"; // element.style, para sacar el elemento
    }
});



function addDeleteBtn() {
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", (e) =>{
        const item = e.target.parentElement;
        item.remove(); // o item.remove(); ul.removeChild(item)

        const items = document.querySelectorAll("li");
        
        if (items.length === 0){
            empty.style.displau = "block";

        }
    });


    return deleteBtn;


}