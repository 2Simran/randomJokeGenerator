// JSON means JAVASCRIPT OBJECT NOTATION
//   <div id="joke" class="joke">Joke is loading.........</div>
// {/* <button id="jokeBtn" class="btn">Next Joke ➡️</button> */

// PROMISES 
// 2condition => success => fail
// 90% promises are consumed not created
// GET https://icanhazdadjoke.com/


const jokes = document.querySelector('#joke');
const jokeBtn = document.querySelector('#jokeBtn');

// API CALLING BY PROMISES
// const generateJokes = () => {

//     const setHeader = {
//         headers: {
//             Accept: "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com', setHeader) //request for API
//     .then((res) => res.json() )                               // for response  
//         // console.log(res.json()); //if data will be fullfilled the we recevie response in .then((res)) 
//         // .json is used to convert html into json
//     .then( (data) => {
//         jokes.innerHTML=data.joke
//     }).catch((error) => { // if data reject the catch is used
//         console.log(error);
//     })

// }


// API CALLING BY ASYNC AWAIT
// creating async function
// async function generateJoke( ){

// }
// async await with error handling
const generateJokes = async () => {

    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
    
        const res = await fetch('https://icanhazdadjoke.com', setHeader); //request for API
        const data= await res.json();
        jokes.innerHTML=data.joke;        
    }catch(err){
        console.log(`The error is ${err}`);
    }
}
jokeBtn.addEventListener('click', generateJokes);
generateJokes();
























