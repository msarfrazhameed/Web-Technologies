window.onload = function() {
    console.log("Page loaded");

let pbt1= document.getElementById("button-pricing");

pbt1.addEventListener("click", ()=>{
    console.log("button clicked");
});


const peopleSelect = document.getElementById("people-select");
const calculatedPrice= document.getElementById("calculated-price");


if(peopleSelect && calculatedPrice){
    peopleSelect.addEventListener("change", (event)=>{
            const selectedValue= event.target.value;
            if (selectedValue === "2"){
                calculatedPrice.innerText = "Estimated Cost: $40/week";
            } else if (selectedValue === "4"){
                calculatedPrice.innerText = "Estimated Cost: $80/week";
            }
        });
}


const label= document.querySelector('label[for="people-select"]');

label.addEventListener("click", ()=>{
    console.log("Label is clicked");
});



};
