class Tiger {
    constructor(name) {
        this.name = name;
    }
}

const tiger = new Tiger("Supachet");

let student1 = {
    name: "John",
    age: 30,
    address:{
        district: "Khon Kaen",
        street: "Khotthanan",
        zip: "40000",
        city: "Khon Kaen",
    },
    parentName:["Somchai", "Somying"],
}


function changeTitleColor(){
    const title = document.getElementById("title")

    if(title.classList.contains("hidden")){
        title.classList.remove("hidden")
    }
    else{
        title.classList.add("hidden")
    }
}

function sum(){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)

    let result = document.getElementById("result")
    result.innerHTML = num1 + num2
}
