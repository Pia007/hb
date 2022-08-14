console.log('connected')


//!Step 1 Grab HTML Elements
const getAllBtn = document.querySelector('#all')
const charBtns = document.querySelectorAll('.char-btns')
const ageForm = document.querySelector('#age-form')
const ageInput = document.querySelector('#age-input')
const createForm = document.querySelector('#create-form')
const newFirstInput = document.querySelector('#first')
const newLastInput = document.querySelector('#last')
const newGenderDropDown = document.querySelector('select')
const newAgeInput = document.querySelector('#age')
const newLikesText = document.querySelector('textarea')
const charContainer = document.querySelector('section')


//? Store the url in a variable
const baseURL = "http://localhost:4000";


//! Step 2 Write Callback Functions

function createCharacterCard(char) {

  // rep a section that has info about the character
  let charCard = document.createElement('div')

  // then write the info about the character in the section
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`
 
  // then append the section to the container
  charContainer.appendChild(charCard)
}


// resets the form
function clearCharacters() {
  charContainer.innerHTML = ``
}

//* Get request to grab all characters
  //^ Write an axios.get request to the characters endpoint on the server
    //^ then, handle the promise(response)
      //^ console.log the response.data to get a look at the data


function getAllChars() {
  //! invoke clear all characters to clear the previous characters
  clearCharacters();

  //^ invoke the axios get request to the server
  axios.get(`${baseURL}/characters`)
    .then((response) => {
      console.log(response.data);

      //^ store response.data in a variable
      const charactersArray = response.data;

      //^ loop through the array of characters and create a character card for each character
      for(let i = 0; i < charactersArray.length; i++) {
        //^ look at each character in the array
        // console.log(charactersArray[i]);
        
        //^ pass the character to the createCharacterCard function to create a card for the character
        createCharacterCard(charactersArray[i]);
      }
    })
}


//* Get request to grab a single character

function getOneChar(e) {
  // using e.target can track where the button was clicked

  //! invoke clear all characters to clear the previous characters
  clearCharacters();

  //^ invoke the axios get request to the server using the character endpoint with e.target.id as the id as the param
  axios.get(`${baseURL}/character/${e.target.id}`)
    .then((response) => {
      console.log(response.data);

      //^ store response.data in a variable
      const characterObj = response.data;

      //^ pass the character to the createCharacterCard function to create a card for the character
      createCharacterCard(characterObj);

    })
}

function createNewChar(event) {
  event.preventDefault();
  
  clearCharacters();

  //^ format the likes data from the like textarea
  let newLikes = [...newLikesText.value.split(",")];

  //^ create an object that will be the body, this gives it structure
  let bodyObj = {
    firstName: newFirstInput.value,
    lastName: newLastInput.value,
    gender: newGenderDropDown.value,
    age: newAgeInput.value,
    likes: newLikes
  }

  //^ invoke the axios post request to the server using the character endpoint with bodyObj as the body as the param
  axios.post(`${baseURL}/character`, bodyObj)
    .then((response) => {
      // console.log(response.data);
      // data is an array
      const newArray = response.data;

      //^ use a for loop to loop through the array of characters and create a character card for each character
      for(let i = 0; i < newArray.length; i++) {
        // create a character card for each character
        createCharacterCard(newArray[i]);
      }
    })

  //^ clear the form
  newFirstInput.value = '';
  newLastInput.value = '';
  newGenderDropDown.value = 'female';
  newAgeInput.value = '';
  newLikesText.value = '';


}




//! Step 3 Assign Event Listeners

//^ attach an event listener to the get all button
getAllBtn.addEventListener('click', getAllChars);

//^ use a for loop to cycle through the array of buttons and then attach an event listener to each button
for(let i = 0; i < charBtns.length; i++) {
  charBtns[i].addEventListener('click', getOneChar);
}

//^ add the event listener to the create form
createForm.addEventListener('submit', createNewChar);

//! Everytime the page loads, get all the characters
// this helps if you want something to appear everytime the page loads
getAllChars();