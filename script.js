var quiz = [
  {
    id: 1,
    answer: 3,
    question: "Which was not one of Voldemort's Horcruxes?",
    options: ["Harry", "Nagini", "Helga's Diadem", "Tom Riddle's Diary"],
  },
  {
    id: 2,
    answer: 1,
    question: "Which of these are not one of Hagrid's many pets?",
    options: ["Grawp", "Fluffy", "Aragog", "Noberta"],
  },
  {
    id: 3,
    answer: 3,
    question: "Which class did Severus Snape always want to teach?",
    options: [
      "Potions",
      "Charms",
      "Defense Against Dark Arts",
      "Transfiguration",
    ],
  },
  {
    id: 4,
    answer: 3,
    question: "Which Hogwarts house did Moaning Myrtle belong in?",
    options: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
  },
  {
    id: 5,
    answer: 2,
    question: "What class did Neville end up teaching at Hogwarts?",
    options: ["Astronomy", "Herbology", "Charms", "Muggle Studies"],
  },
];
let queno = 0;
var nextbtn = document.getElementById("next");
var restart = document.getElementById("restart");
var list = document.querySelector("ul");
var que = document.getElementById("que1");
var box1 = document.getElementById("container");
var message = document.getElementById("message");
var arrow = document.getElementById("arrow");



function displayque(queno) {
  if(box1.classList.contains('complete')){
    box1.classList.remove('complete');
  }
  que.style.display="block";
  list.style.display="block";
  restart.style.display="none";
  message.style.display="none";
  arrow.style.display="none";
  que.innerHTML = quiz[queno].id + "." + quiz[queno].question;
  que.id = "que" + quiz[queno].id;
  console.log(que.id);
  // option.innerHTML=quiz[0].options[1];
  for (var i = 0; i < quiz[queno].options.length; i++) {
    var text = document.createTextNode(quiz[queno].options[i]);
    var li = document.createElement("li");
    li.appendChild(text);
    li.className = "option";
    li.id = "option" + (i + 1);
    console.log(li);
    list.appendChild(li);
  }
  var option1 = document.getElementById("option1");
  var option2 = document.getElementById("option2");
  var option3 = document.getElementById("option3");
  var option4 = document.getElementById("option4");
  var userOption = 0;
  option1.onclick = () => {
    option2.style.backgroundColor = "";
    option3.style.backgroundColor = "";
    option4.style.backgroundColor = "";
    if (quiz[queno].answer === 1) {
      option1.style.backgroundColor = "#47d45f";
    } else {
      option1.style.backgroundColor = "#f22d2d";
    }
  };
  option2.onclick = () => {
    option1.style.backgroundColor = "";
    option3.style.backgroundColor = "";
    option4.style.backgroundColor = "";
    if (quiz[queno].answer === 2) {
      option2.style.backgroundColor = "#47d45f";
    } else {
      option2.style.backgroundColor = "#f22d2d";
    }
  };
  option3.onclick = () => {
    option4.style.backgroundColor = "";
    option1.style.backgroundColor = "";
    option2.style.backgroundColor = "";
    if (quiz[queno].answer === 3) {
      option3.style.backgroundColor = "#47d45f";
    } else {
      option3.style.backgroundColor = "#f22d2d";
    }
  };
  option4.onclick = () => {
    option1.style.backgroundColor = "";
    option2.style.backgroundColor = "";
    option3.style.backgroundColor = "";
    if (quiz[queno].answer === 4) {
      option4.style.backgroundColor = "#47d45f";
    } else {
      option4.style.backgroundColor = "#f22d2d";
    }
  };
  nextbtn.onclick=function(){
  console.log(option3.style.backgroundColor);
  if (
      option1.style.backgroundColor === "rgb(71, 212, 95)" |
      option2.style.backgroundColor === "rgb(71, 212, 95)" |
      option3.style.backgroundColor === "rgb(71, 212, 95)" |
      option4.style.backgroundColor === "rgb(71, 212, 95)"
      ) {
        if(queno==4){
          box1.classList.add('complete');
          restart.style.display="block";
          list.style.display="none";
          que.style.display="none";
        }
      else{
        queno = queno + 1;
      que.innerHTML = "";
      list.innerHTML = "";
      displayque(queno);
      }
    } else {
      message.style.display = "block";
      arrow.style.display = "block";
    }
  }
  restart.onclick=()=>{
    que.innerHTML = "";
      list.innerHTML = "";
      displayque(0);
  }
}
displayque(queno);
