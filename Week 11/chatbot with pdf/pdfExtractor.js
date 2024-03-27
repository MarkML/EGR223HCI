//this file is responsible for extractingn text from PDF files

// pdfExtractor.js
const fs = require('fs').promises;
const pdf = require('pdf-parse');

async function extractTextFromPDF(pdfPath) {
  const dataBuffer = await fs.readFile(pdfPath);
  return pdf(dataBuffer).then(data => data.text);
}

module.exports = { extractTextFromPDF };
