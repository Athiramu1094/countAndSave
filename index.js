const myNumber = document.getElementById('number')
const saveEl = document.getElementById('save-el')

let number = 0

function count(){
    number = number + 1
    myNumber.innerHTML = number
}

function save(){
    savedNumber = number + "-"
    saveEl.innerHTML += savedNumber
    myNumber.innerHTML = 0
    number = 0
}

function remove(){
    saveEl.innerHTML = ""
    myNumber.innerHTML = ""
}