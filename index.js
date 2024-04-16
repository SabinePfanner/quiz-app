const bookmark = document.querySelector('[data-js="bookmarks"]');

bookmark.addEventListener("click", () => {
  bookmark.classList.toggle("fa-solid");
});


const showAnswer = document.querySelector('[data-js="show-answer"]');
const answer = document.querySelector('[data-js="answer"]');

showAnswer.addEventListener("click", () => {
  answer.classList.toggle("hidden");
  if (answer.classList.contains ("hidden")) {
    showAnswer.textContent= "Antwort ansehen";
  } else {
    showAnswer.textContent="Antwort verstecken"
  }
})