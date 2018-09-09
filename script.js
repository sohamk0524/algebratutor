

  var questions = [
    {
      prompt: "y = ax^2 + bx + c falls under which form?\n (a) Intercept Form \n (b) Standard Form \n (c) Slope-Intercept Form \n (d) Vertex Form",

      answer: "b"
    },
    {
      prompt: "which form does the equation y = m(x) + b fall under?\n (a) Intercept Form \n (b) Standard Form \n (c) Slope-Intercept Form",

      answer: "c"
    },
  ]

  var score = 0;

  for (var i = 0; i < questions.length; i++){
    var response= window.prompt(questions[i].prompt);
    if (response == questions[i].answer){
      score++;
      alert("Correct!");
    } else {
      alert("Wrong!")
    }
  }

alert("You got " + score; + "/" + questions.length)
