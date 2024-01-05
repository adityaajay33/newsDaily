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
        console.log(data.length);
        for(let i=1; i<=4; i++){
            arrayNews.push([data[i-1].title, data[i-1].abstract, data[i-1].url]);
            message = message + `  ${i}. ${data[i-1].title} \n Abstract: ${data[i-1].abstract} \n \n URL: ${data[i-1].url} \n \n`;
        }
        console.log(message);
        sendMessage(message);
        
    })
    .catch(error => {
        console.error('Error:', error);
    });


   