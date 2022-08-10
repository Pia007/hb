console.log(`JS has been connected!`);

//* STEP 1: GRAB THE HTML ELEMENT

const plsBtn = document.querySelector("#plus-btn");

const counterText = document.querySelector("#counter");

const resetBtn = document.querySelector("#reset-btn");

const minusBtn = document.querySelector("#minus-btn");

const themeBtns = document.querySelectorAll(".theme-buttons");

const inputBox = document.querySelector("#input-box");
const inputBtn = document.querySelector("#submit-btn");


//* STEP 2: WRITE OUT YOUR CALLBACK FNS.

let count = 0;

const increaseCount = () => {
    count++;
    console.log(count);
    counterText.textContent = count;
}

const resetCount = () => {
    count = 0;
    counterText.textContent = count;
}

const decreaseCount = () => {
    count--;
    counterText.textContent = count;
}

const selectTheme = (e) => {
    console.log(e.target.textContent);
    let theme = e.target.textContent;

    //add class of body and main
    document.querySelector("body").className = theme;
    document.querySelector("main").className = theme;

    // add the class of the button to match that buttons text
    const buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme;
    }
}

const logInputValue = () => {
    console.log(inputBox.value);
}



//* STEP 3: COMBINE YOUR ELEMENT AND FUNCTION USING addEventListener

plsBtn.addEventListener('click', increaseCount);
resetBtn.addEventListener('click', resetCount);
minusBtn.addEventListener('click', decreaseCount);
inputBtn.addEventListener('click', logInputValue)

for (let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener('click', selectTheme);
}


