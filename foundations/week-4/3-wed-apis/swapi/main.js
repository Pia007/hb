console.log('connected');

// ELEMENTS
const btn = document.querySelector('#btn');

//define the baseURL variable
const baseURL = 'https://swapi.dev/api/';


// FUNCTIONS

const getResidents = () => {
    
    // call the clearResidents function
    clearResidents();

    // define query variable
    let planetInfo= 'planets/?search=Alderaan'

    // get request to the baseURL and the query
    axios.get(` ${baseURL}${planetInfo}`)
    .then(response => {

        // set the data to the data variable and check it
        const Alderaan = response.data.results;
        console.log(Alderaan);
        
        // set the residents property to the residents variable and check it
        let residents = Alderaan[0].residents;
        console.log(`These are residents `, residents);  

        // loop through the residents array and create an elment for each resident
        for (let i = 0; i < residents.length; i++) {
            
            // get request for each resident
            axios.get(residents[i])
            .then(response => {
                
                // assign the data to the resident variable and check it
                let resident = response.data;
                console.log(`This is a resident: `, resident);
                
                // assign the resident name to a variable and check it
                let residentName = resident.name;
                console.log(residentName);

                // create a new element for the resident name, append it to the body
                let h2 = document.createElement('h2');
                h2.textContent = residentName;
                h2.classList.add('resident');
                document.body.appendChild(h2);

            }).catch(error => {
                console.log(error);
            })
        }
    }).catch(error => {
        console.log(error);
    });
}

// clear the residents from the page
const clearResidents = () => {
    removeRes = document.querySelectorAll('.resident');
    if (removeRes.length > 0) {
        removeRes.forEach(el => {
            el.remove();
        });
    }
}


// COMBINE THE ELEMENTS AND FUNCTIONS
btn.addEventListener('click', getResidents);