chrome.runtime.onMessage.addListener((message) => {
  const username = message.username;

  const users = {
    harsh: "123456",
    admin: "admin@123"
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
  const userInput = document.querySelector("#username");
  const passInput = document.querySelector("#password");

  if (!userInput || !passInput) {
    alert("Login form not found");
    return;
  }

  userInput.value = username;
  passInput.value = password;

  // Delay ke baad directly home page redirect
  setTimeout(() => {
    window.location.href = "http://127.0.0.1:5501/Website(Frontend)/login-website/home.html";
  }, 800); // 0.8 second delay
}


