const express = require('express');
const bodyParser = require('body-parser');
require('isomorphic-fetch');
require('dotenv').config();
const cors = require('cors');


// Create an instance of an Express application.
const app = express();
const PORT = 3000;

//the body-parser middleware will automatically parse the body of every incoming HTTP request
// that has a 'Content-Type' header of 'application/json'.
//The parsed data will be stored as a JavaScript object in req.body, where req is the request object passed to your route handlers.
// This allows you to easily access the data sent by the client in your route handlers.
app.use(bodyParser.json());

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.use(cors());
app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;
    
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{role: "user", content: userMessage}],
                max_tokens: 50
            }),
        });
        const data = await response.json();
        const botResponse = data.choices[0].message.content.trim()
        // The res object represents the HTTP response that the server will send back to the client that sent the request.
        // .json() is a method that sends a JSON response. 
        res.json({ message: botResponse });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing your message');
    }
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
