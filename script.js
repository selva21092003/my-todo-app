const collection = document.getElementById("list")
const btn = document.getElementById("add-button")
const value=document.getElementById("input")

btn.addEventListener("click", () => {
    if(value.value==""){
        alert("input field is empty")
        return
    }
    let list = document.createElement("li")
    list.innerHTML = "<span onclick='remove(event)'>&times;</span>" + value.value
    value.value=""
    list.setAttribute("onClick","lineCrack(event)")
    collection.appendChild(list)
    saveData()
})

function remove(e){
    e.target.parentElement.remove()
    saveData()
}
function lineCrack(e) {
    e.target.classList.toggle("checked")
    saveData()
}
function saveData(){
    localStorage.setItem("Data",collection.innerHTML)
}
function showData(){
    collection.innerHTML=localStorage.getItem("Data")
}
showData()



