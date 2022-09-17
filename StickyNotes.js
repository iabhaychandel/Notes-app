let submit = document.querySelector(".submit");
let title = document.getElementById("text");
let text = document.getElementById("desc");
// console.log(title,desc);
let NotesElem = document.querySelector(".notes")
submit.addEventListener("click",(e)=>{
    e.preventDefault();
    addNotes()
}) 
function addNotes() {
    let titleVal = title.value;
    let descVal = desc.value 
    let card = document.createElement("div");
    card.classList.add("card");
    if(titleVal){
        card.innerHTML =`
        <h1>${titleVal}</h1>
        <p>${descVal}</p> 
        <button class="del">Delete</button> 
        `
     NotesElem.appendChild(card);
     updatels();
    }
    let clear = card.querySelector(".del");
    clear.addEventListener("click", () => {
        card.remove();
    })
   function updatels() {
    let card = document.querySelectorAll(".card");
    let arr = [];
    card.forEach(element => {
        arr.push({
            title:element.children[0].innerText,
            desc:element.children[1].innerText,
        });
    });
    localStorage.setItem("notes",JSON.stringify(arr));
   }
   
}
document.querySelector('.sun-button').addEventListener('click', () => {
    document.body.classList.toggle('dark')
})