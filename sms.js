require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sendMessage = async(messageSend) =>{
    client.messages
    .create({
        body: messageSend,
        from: '+12059649855',
        to: '+16474259857'
    })
    .then(message => console.log(message.sid));

}

module.exports = { sendMessage }