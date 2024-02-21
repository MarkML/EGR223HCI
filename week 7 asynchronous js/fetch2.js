async function fetchUsers() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  
    try {
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
  
      const users = await response.json();
  
      const userList = document.getElementById('userList');
      userList.innerHTML = ''; // Clear previous list
  
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = `${user.name} - ${user.email}`;
        userList.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error fetching users:', error.message);
      const userList = document.getElementById('userList');
      userList.innerHTML = 'Error fetching users: ' + error.message;
    }
  }
  
  document.getElementById('fetchButton').addEventListener('click', fetchUsers);
  