chrome.runtime.onMessage.addListener((message) => {
  const username = message.username;

  const users = {
    
  };

  if (!users[username]) {
    alert("Username not found!");
    return;
  }

  chrome.tabs.create({
    url: "http://127.0.0.1:5501/Website(Frontend)/login-website/login.html"
  }, (tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: autofillLogin,
      args: [username, users[username]]
    });
  });
});



// Autofill function
function autofillLogin(username, password) {
  
}



