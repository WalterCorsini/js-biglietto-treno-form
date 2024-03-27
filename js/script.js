// 1. find button on page
const sendBtnElem = document.getElementById("send-btn"); // object | null
const resetBtnElem = document.getElementById("reset-btn"); // object | null


let userKm;
let userAge;
let discount = 0;
let priceWithoutDiscount = 0;
let priceOfTheDiscount = 0;
let priceWithDiscount =0;

// INPUT

// 2. add eventListener at button
sendBtnElem.addEventListener("click", function(){
    let userKm = parseInt(document.getElementById("user-km").value); //number
    // console.log(userKm, typeof userKm);
    let userAge = parseInt(document.getElementById("user-age").value); //number
    // console.log(userAge, typeof userAge);

// button reset
resetBtnElem.addEventListener("click", function(){
    document.getElementById("user-km").value="10";
    document.getElementById("user-age").value="0";
    document.getElementById("user-name").value="";
});

// LOGIC

    // calculate discount
    if(userAge < 18){
        discount = 20;
    } else if(userAge > 65){
        discount = 40;
    } else {
        discount = 0;
    }
    // calculate price Without Discount
    priceWithoutDiscount = userKm * 0.21;  //number

    // calculate price of the discount
    priceOfTheDiscount = priceWithoutDiscount * discount / 100;  //number
    
    // calculate price with the discount
    priceWithDiscount = priceWithoutDiscount - priceOfTheDiscount;  // number

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
    
})




