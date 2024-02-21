
  async function fetchData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      document.getElementById('output').innerText = JSON.stringify(data,null, 2 );
    } catch (error) {
      console.error('Error fetching data:', error.message);
      document.getElementById('output').innerText = 'Error fetching data: ' + error.message;
      //same as: document.querySelector('#output').textContent = 'Error fetching data: ' + error.message;
    }
  }
