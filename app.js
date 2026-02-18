if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("serviceWorker.js")
    .then(registration => {
      console.log("Service Worker Registered!", registration);
    })
    .catch(error => {
      console.log("Service Worker Registration Failed!", error);
    });
}

// Add to Home Screen পপআপ
let deferredPrompt;
const addToHomeScreenBtn = document.getElementById("installPWA");

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  deferredPrompt = event;
  addToHomeScreenBtn.style.display = "block";
});

addToHomeScreenBtn.addEventListener("click", () => {
  deferredPrompt.prompt();
  deferredPrompt.userChoice.then(choice => {
    if (choice.outcome === "accepted") {
      console.log("User added to home screen");
    }
    deferredPrompt = null;
  });
});
