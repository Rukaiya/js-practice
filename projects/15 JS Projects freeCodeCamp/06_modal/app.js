const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");
const modalBtn = document.querySelector(".modal-btn");

closeBtn.addEventListener("click", function(){
modal.classList.remove("open-modal");
});

modalBtn.addEventListener("click", function(){
  modal.classList.add("open-modal");
});
