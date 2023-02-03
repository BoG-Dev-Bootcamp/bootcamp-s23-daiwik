import figlet from "figlet" 
import axios from "axios"
const {textsync} = figlet  // figlet is straight up this function 

// callbacks are functions that return after async code 

const url = "https://pokeapi.co/api/v2/pokemon/"


const randomNum = Math.floor(Math.random() * 1008); 
//console.log(randomNum); 

const response = axios.get(url + randomNum)  //this is a async function 
    .then(function (response){ // when a promise is fulfilled it will move onto this .then
        let name = response.data.name
        figlet(name, function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }   
            console.log(data)
        });
    })
    .catch(function (error){ // if there is an error when we call the api, then it runs this function 
        console.log(error)
    })





