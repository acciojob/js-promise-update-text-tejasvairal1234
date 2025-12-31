// your JS code here
function getMessage() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000); // 1 second
  });
}

const output = document.querySelector("#output");

getMessage().then((message) => {
  output.textContent = message;
});
