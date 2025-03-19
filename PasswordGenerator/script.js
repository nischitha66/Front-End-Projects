let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let lowerCase = document.getElementById("lowerCase");
let Uppercase = document.getElementById("Uppercase");
let Numbers = document.getElementById("Numbers");
let Symbols = document.getElementById("Symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon  = document.getElementById("copyIcon ");

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input",()=>{
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener("click",()=>{
    passBox.value = genratePassword();
});

let UpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmopqstuvwxyz";
let allNumbers =  "0123456789";
let allSymbols = "`!@#$%^&*";

// function to generate number

let i = 1;
while(i <= inputSlider.value) {
function genratePassword(){
    let genPassword = "";
    let allChars = "";
    
    allChars += lowerCase.checked ? lowerChars : "";
    allChars += Uppercase.checked ? UpperChars : "";
    allChars += Numbers.checked ? allNumbers : "";
    allChars += Symbols.checked ? allSymbols : "";   

 
    //we are generating passwords using inbuild functions...
    genPassword += allChars.charAt(Math.floor(Math.random()*UpperChars.length));
    i++;
    return genPassword;
}
}