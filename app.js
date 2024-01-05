const express = require('express');
require('dotenv').config()
const axios = require('axios');
const { sendMessage } = require('./sms');

const PORT = process.env.PORT || 3001;
const API_KEY = process.env.NYT_API_KEY;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})

const apiUrl = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;




axios.get(apiUrl)
    .then(response => {
        let arrayNews = [];
        message = ``;
        const data = response.data.results;
        for(let i=1; i<=5; i++){
            arrayNews.push([data[i].title, data[i].abstract, data[i].url]);
            message = message + `  ${i}. ${data[i].title} \n Abstract: ${data[i].abstract} \n \n URL: ${data[i].url} \n \n`;
        }
        console.log(message);

        
    })
    .catch(error => {
        console.error('Error:', error);
    });


   