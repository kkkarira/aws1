document.addEventListener('DOMContentLoaded', function() {
  // POST method to increment the visitor count
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://f03lvdlc1a.execute-api.us-east-1.amazonaws.com/Production');
  xhr.send();

  // GET method to retrieve the current visitor count and display it on the webpage
  async function getCurrentCount() {
    const response = await fetch('https://f03lvdlc1a.execute-api.us-east-1.amazonaws.com/Production');
    const data = await response.json();
    
    // Check if the response contains the "count is" property
    if (data && data["count is"] !== undefined) {
      const count = data["count is"];
      const countElement = document.getElementById('count');
      countElement.innerText = count;
    } else {
      // Handle the case where the response doesn't contain the expected property
      const countElement = document.getElementById('count');
      countElement.innerText = 'Data format error';
    }
  }

  getCurrentCount();
});
