

function sum(){
    const first = Number(document.getElementById("first").value) 
    const second = Number(document.getElementById("second").value)
    const rezult = document.getElementById("rezult")

    const s = first + second

    rezult.innerHTML = s

}