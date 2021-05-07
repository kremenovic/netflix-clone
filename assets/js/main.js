const questions = document.querySelectorAll(".question");
const getInput = document.querySelectorAll(".animated_input input");
const getLabel = document.querySelectorAll(".animated_input label");

// FAQ toggle
questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    const currentQuestion = e.currentTarget;
    if(currentQuestion.classList.contains("active")) {
      question.classList.remove("active");
    } else {
      questions.forEach(question => {
        question.classList.remove("active");
      })
      currentQuestion.classList.add("active");
    }
  })
})

// Animation for get started input
getInput.forEach(inputField => {
  inputField.addEventListener("change", (e) => {
    const currentInputField = e.currentTarget;
    const currentLabel = currentInputField.nextElementSibling;
    
    if(inputField.value.length === 0) {
      currentLabel.classList.remove("active_label");
    } else {
      currentLabel.classList.add("active_label");
    }
  })
})