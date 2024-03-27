// 1. find button on page
const sendBtnElem = document.getElementById("send-btn"); // object | null
const resetBtnElem = document.getElementById("reset-btn"); // object | null
const ticket = document.getElementById("container");

let userName = "";
let userKm;
let userAge = "";
let discount = 0;
let priceWithoutDiscount = 0;
let priceOfTheDiscount = 0;
let priceWithDiscount =0;

// INPUT


// button reset
resetBtnElem.addEventListener("click", function(){
    document.getElementById("user-km").value="10";
    document.getElementById("user-name").value="";
    document.getElementById("user-age").value="minorenne";
    ticket.classList.add("hidden");
});

// 2. add eventListener at button
sendBtnElem.addEventListener("click", function(){
    let userName = document.getElementById("user-name").value; //string
    let userKm = parseInt(document.getElementById("user-km").value); //number
    let userAge = document.getElementById("user-age").value; //string
    console.log(userName);
    
// LOGIC
if(userName !== ""){
    // calculate discount
    if(userAge === "minorenne"){
        discount = 20;
    } else if(userAge === "over65"){
        discount = 40;

    } else {
        discount = 0;
    }
    console.log(userAge, typeof userAge);
    // calculate price Without Discount
    priceWithoutDiscount = userKm * 0.21;  //number

    // calculate price of the discount
    priceOfTheDiscount = priceWithoutDiscount * discount / 100;  //number
    
    // calculate price with the discount
    priceWithDiscount = priceWithoutDiscount - priceOfTheDiscount;  // number

    // eliminate class hidden
    ticket.classList.remove("hidden");
// OUTPUT

    // print to video
    document.getElementById("result").innerHTML = `
    <span>
        - il costo base del biglietto per <strong>${userKm}km</strong> inseriti è di <strong>€${priceWithoutDiscount.toFixed(2)}</strong>.
    </span>
    <span>
        - hai diritto ad uno sconto del <strong>${discount}%</strong> che equivale a <strong>€${priceOfTheDiscount.toFixed(2)}</strong>.
    </span>
    <span>
        - applicando lo sconto, il prezzo del biglietto è  <strong>€${priceWithDiscount.toFixed(2)}</strong>.
    </span>
    `
}
    
});




