document.getElementById("btn").onclick = function clone(){
const person = {name: document.getElementById("txt1").value,
    age: document.getElementById("txt2").value
}

const clone = Object.assign({}, person);
console.log(clone);
clone.name = document.getElementById("txt3").value;
console.log("Name:"+clone.name )
console.log("Name:"+person.name)
document.getElementById("1").innerText = "Person:"+person.name;
document.getElementById("2").innerText = "Clone:"+clone.name;
}