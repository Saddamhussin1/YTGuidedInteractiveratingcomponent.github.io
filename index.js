const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const submitButton = document.getElementById("submit");
const rateAgain = document.getElementById("rate-again");
const rating = document.getElementById("rating");
const rate = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  thanksContainer.classList.remove("hidden")
  mainContainer.style.display = "none";
})

rateAgain.addEventListener("click", () => {
  thanksContainer.classList.add("hidden")
  mainContainer.style.display = "block";
})

rate.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML
  })
})





