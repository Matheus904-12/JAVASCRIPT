var boxes = document.querySelectorAll(".box");

for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function() {
    var box = document.createElement("div");
    box.className = "question-box";

    var question1 = document.createElement("input");
    question1.type = "text";
    question1.placeholder = "Pergunta 1";

    var question2 = document.createElement("input");
    question2.type = "text";
    question2.placeholder = "Pergunta 2";

    box.appendChild(question1);
    box.appendChild(question2);

    document.body.appendChild(box);
  });
}


function calculatePerimeter() {
   
    var sideLength = document.getElementById("sideLength").value;
  
    
    var perimeter = 4 * sideLength;
  
   
    document.getElementById("perimeter").innerHTML = perimeter;
  }