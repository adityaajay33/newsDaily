const express = require('express');
require('dotenv').config()
const axios = require('axios');

const PORT = process.env.PORT || 3001;
const API_KEY = process.env.NYT_API_KEY;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})

const apiUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;

console.log(apiUrl);



// Make a GET request
axios.get(apiUrl)
    .then(response => {
        // Handle the response data

        const data = response.data.results;

        for(let i=0; i<data.length; i++){

            console.log(data[i].title);
        }

    })
    .catch(error => {
        // Handle errors
        console.error('Error:', error);
    });


   