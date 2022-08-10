console.log('hello world');

const message = document.querySelector('#message')




const addMovie = (e) => {
    e.preventDefault();
    let inputField = document.querySelector("input");

    const movie = document.createElement("li");

    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);

    console.log(movieTitle);

    movie.appendChild(movieTitle);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener('click', deleteMovie);
    movie.appendChild(deleteBtn);

    const movieList = document.querySelector("ul");
    movieList.appendChild(movie);
    console.log(inputField.value);
    console.log(movieList);


    inputField.value = '';
}


const form = document.querySelector("form");
form.addEventListener('submit', addMovie);

const deleteMovie = (e) => {
    message.textContent = `${e.target.parentElement.firstElementChild.textContent} was deleted`;
    
    e.target.parentNode.remove();

    revealMessage();
}    

const crossOffMovie = (e) => {
    e.target.classList.toggle("checked");

    if (e.target.classList.contains("checked") === true) {
        message.textContent = `You watched ${e.target.textContent}!`; 
    } else {
        message.textContent = `${e.target.textContent} was added to your list`;
    }

    revealMessage();
}


const revealMessage = () => {
    message.classList.remove("hide");

    setTimeout(() => {
        message.classList.add("hide")
    }, 1000)
}