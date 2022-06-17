console.log("The JS is loaded.");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
let messageOne = document.querySelector("#message-1");
let messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  messageOne.textContent = "Loading ...";
  messageTwo.textContent = "";

  fetch("http://localhost:3000/api/weather?search=" + location).then(
    (response) => {
      console.log(response);
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = data.location;
          messageTwo.textContent = data.weather;
        }
      });
    }
  );
});
