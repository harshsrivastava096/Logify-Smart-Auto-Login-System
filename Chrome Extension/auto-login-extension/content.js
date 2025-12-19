// console.log("CONTENT SCRIPT LOADED");

// window.addEventListener("message", (event) => {
//   console.log("📩 Message received:", event.data);

//   if (event.data.type === "AUTO_LOGIN") {
//     chrome.runtime.sendMessage({
//       username: event.data.username
//     });
//   }
// });


console.log("🔥 Logify content script loaded");

window.addEventListener("message", (event) => {
  if (event.source !== window) return;

  const data = event.data;

  if (data.type === "AUTO_LOGIN") {
    console.log("📩 Message received:", data);

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    if (!usernameInput || !passwordInput) {
      console.error("❌ Login form not found");
      return;
    }

    // Autofill
    usernameInput.value = data.username;
    passwordInput.value = "AUTO_PASSWORD";

    console.log("✅ Autofill completed");

    // 🔥 IMPORTANT: Delay + absolute redirect
    setTimeout(() => {
      console.log("➡ Redirecting to home page");
      window.location.assign("home.html");
    }, 1000);
  }
});
