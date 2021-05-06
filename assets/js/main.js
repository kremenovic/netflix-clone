const questions = document.querySelectorAll(".question");

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