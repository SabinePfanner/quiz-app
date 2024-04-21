const submitForm = document.querySelector('[data-js="form-new-card"]');
const questionInput = document.querySelector('[data-js="quiz-question"]');
const answerInput = document.querySelector('[data-js="quiz-answer"]');
const tagListInput = document.querySelector('[data-js="tag-input"]');
const charactersLeftElement = document.querySelector(
  '[data-js="characters-left"]'
);

submitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);
  const newCard = document.createElement("article");
  document.body.append(newCard);
  newCard.classList.add("question-card");
  const bookmark = document.createElement("i");
  newCard.append(bookmark);
  bookmark.classList.add("fa-regular", "fa-bookmark", "bookmark");
  const titleNC = document.createElement("h2");
  newCard.append(titleNC);
  titleNC.classList.add("question");
  titleNC.textContent = event.target.question.value;
  const buttonNC = document.createElement("button");
  newCard.append(buttonNC);
  buttonNC.classList.add("button");
  buttonNC.textContent = "Antwort ansehen";
  const answerNC = document.createElement("p");
  titleNC.append(answerNC);
  answerNC.classList.add("answer");
  answerNC.textContent = event.target.answer.value;
  const tagList = document.createElement("ul");
  newCard.append(tagList);
  tagList.classList.add("tags");
  const tagsNC = document.createElement("li");
  tagList.append(tagsNC);
  tagsNC.textContent = "#" + event.target.tagInput.value;
});

questionInput.addEventListener("input", () => {
  charactersLeftElement.textContent = 150 - question.value.length + " Zeichen";
});
// answerInput.addEventListener("input", () => {
//     charactersLeftElement.textContent = 150 - answer.value.length + " Zeichen";
// });
// tagListInput.addEventListener("input", () => {
//     charactersLeftElement.textContent = 30 - tagInput.value.length + " Zeichen";
// });
