// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#span");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function(e){
    const styles = e.currentTarget.classList;
    if(styles.contains("decrease")){
      count--;
    }
    else if(styles.contains("increase")){
      count++;
    }
    else{
      count = 0;
    }

    // change the color of the text according to value
    if(count > 0){
      value.style.color = "green";
    }
    else if(count < 0){
      value.style.color = "red";
    }
    else{
      value.style.color = "#222";
    }
    value.textContent = count;
  })
});