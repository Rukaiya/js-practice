const btns = document.querySelectorAll(".question-btn");

// using seletors inside the dom
const questions = document.querySelectorAll(".question");

questions.forEach(function(question){
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click",function(){
    questions.forEach(function(item){
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text")
  });
});

// traversing the dom

// btns.forEach(function(btn){
//   btn.addEventListener("click", function(e){
//     const questionArticle = e.currentTarget.parentElement.parentElement;
//     questionArticle.classList.toggle("show-text");
//   });
// })