// app.js
// create an interface to read user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
require('dotenv').config();
const { extractTextFromPDF } = require('./pdfExtractor');
const { splitTextIntoChunks } = require('./chunker');
const { queryOpenAI } = require('./openAIQuery');

// Get the PDF path from the command line arguments
const pdfPath = process.argv[2]; // e.g. './NREIP.pdf'


readline.question('Please enter your question: ', (userQuestion) => {
  main(userQuestion);
  readline.close();
});
// passin the question to the main function
async function main(question) {
  try {
    const text = await extractTextFromPDF(pdfPath);
    const chunks = splitTextIntoChunks(text, 1000); // Adjust chunk size as needed

    for (const chunk of chunks) {
      const answer = await queryOpenAI(question, chunk);
      console.log(`Answer: ${answer}`);
      
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}


