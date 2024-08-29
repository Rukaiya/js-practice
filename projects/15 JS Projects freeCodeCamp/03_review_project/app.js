const reviews = [
  {
    id: 1,
    name: "John Doe",
    job: "Web Developer",
    img: "./assets/person-avatar-4.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum."
  },
  {
    id: 2,
    name: "Jane Smith",
    job: "UI/UX Designer",
    img: "./assets/person-avatar-2.png",
    text: "Cras ultricies ligula sed magna dictum porta. Vestibulum ac diam sit amet quam vehicula elementum."
  },
  {
    id: 3,
    name: "Mike Johnson",
    job: "Project Manager",
    img: "./assets/person-avatar-5.png",
    text: "Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit."
  },
  {
    id: 4,
    name: "Emily Davis",
    job: "Data Analyst",
    img: "./assets/person-avatar-3.png",
    text: "Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada."
  },
  {
    id: 5,
    name: "Chris Lee",
    job: "Backend Developer",
    img: "./assets/person-avatar.jpg",
    text: "Praesent sapien massa, convallis a pellentesque nec, egestas non nisi."
  }
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function(){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;  
})
