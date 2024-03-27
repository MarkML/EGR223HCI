//This file contains logic for chunking text into smaller pieces

// chunker.js
function splitTextIntoChunks(text, maxChunkSize) {
    let chunks = [];
    for (let i = 0; i < text.length; i += maxChunkSize) {
      chunks.push(text.substring(i, i + maxChunkSize));
    }
    return chunks;
  }
  
  module.exports = { splitTextIntoChunks };
  