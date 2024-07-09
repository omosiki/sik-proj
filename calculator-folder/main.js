const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button")
const specialCahr = ["%","*","/","-","+","*"]
let output = "";


const calculate = (btnvalue) =>{
    if(btnvalue === "=" && btnvalue !== ""){
        output = eval(output.replace("%", "*/100"))
    }else if(btnvalue === "AC"){
        output =""
    }else if(btnvalue === "DEL"){
        output = output.toString().slice(0,-1)
    }else{
        if (output === "" && specialCahr.includes(btnvalue))return;
        output +=btnvalue
    }
    display.value = output;
}
// addEventListener to button on click
buttons.forEach((button)=>{
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})