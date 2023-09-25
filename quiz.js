class Quiz {
    constructor(question, option1, option2, option3, option4, correctOption) {
      this.question = question;
      this.option1 = option1;
      this.option2 = option2;
      this.option3 = option3;
      this.option4 = option4;
      this.correctOption = correctOption;
    }
  }
  
  const quesetionHeading = document.getElementById("question");
  const option1Div = document.getElementById("opt1");
  const option2Div = document.getElementById("opt2");
  const option3Div = document.getElementById("opt3");
  const option4Div = document.getElementById("opt4");
  const submitButton = document.getElementById("submit");
  const score = document.getElementById("result_game");
  const questionWrapper = document.getElementById("question_wrapper");
  const string = document.getElementById("score_string");
  
  option1Div.addEventListener("click", onOption1Click);
  option2Div.addEventListener("click", onOption2Click);
  option3Div.addEventListener("click", onOption3Click);
  option4Div.addEventListener("click", onOption4Click);
  submitButton.addEventListener("click", onSubmit);
  
 
  
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  
  let arrayQuizz = [];
  
  let quizzAstronomy1 = new Quiz("Which is the second planet from the sun?","Venus","Mars", "Jupiter", "Neptune", "Venus");
  let quizzAstronomy2= new Quiz("What is the fifth planet from the sun?","Pluto", "Earth","Jupiter","Uranus", "Jupiter");
  let quizzAstronomy3 = new Quiz("Which planet did space probe Mariner 9 visit in 1971?","Moon","Saturn","Venus","Mars", "Mars");
  let quizzAstronomy4 = new Quiz("In 1610, who discovered the four largest moons of Jupiter using a telescope?","Giovanni Cassini", "Galileo Galilei","Edmond Halley","Claudius Ptolemy","Galileo Galilei");
  let quizzAstronomy5 = new Quiz("Name the galaxy that contains the Solar System?","Milky Way Galaxy","Cygnus A","Virgo A", "Magellanic Clouds", "Mily Way Galaxy");
  let quizzAstronomy6 = new Quiz("Which planet is known as the Watery Planet?","Mercury","Jupiter","Mars", "Earth", "Earth");
  let quizzAstronomy7 = new Quiz("Which planet looks reddish in the night sky?","Saturn", "Mercury","Mars", "Jupiter","Mars");
  let quizzAstronomy8 = new Quiz("Asteroids have their orbits between the planets","Jupiter & Saturn","Mercury& Venus","Earth & Mars","Mars & Jupiter","Mars & Jupiter");
  let quizzAstronomy9 = new Quiz("Which one among the following four planets is the biggest in size?","Mars", "Earth","Venus", "Mercury", "Earth");
  let quizzAstronomy10 = new Quiz("Lunar eclipse is caused when the..","Sun comes between the earth and the moon","Moon comes between the sun and the earth","Earth comes between the sun and the moon","None of these","Earth comes between the sun and the moon");
  let quizzAstronomy11 = new Quiz("The period of one revolution of sun around the centre of galaxy is called?","Light year","Cosmic year","Parsec","Astronomical year","Cosmic year");
  let quizzAstronomy12 = new Quiz("Which of the following planets is known as Morning Star?","Mercury","Venus","Jupiter","Mars","Mercury");

  
  let quizzGeneralKnowledge1 = new Quiz("What artist has the most streams on Spotify?","Drake","Eminem", "Rihanna", "Beyonce","Drake");
  let quizzGeneralKnowledge2 = new Quiz("Which language has the more native speakers?","English", "Romanian", "Spanish","Italian","Spanish");
  let quizzGeneralKnowledge3 = new Quiz("What is the most common surname in the United States?","Smith","Brown","Garcia","Jones","Smith");
  let quizzGeneralKnowledge4 = new Quiz("Aureolin is a shade of what color?","Blue", "Red","Green","Yellow","Yellow");
  let quizzGeneralKnowledge5 = new Quiz("What character have both Robert Downey Jr. and Benedict Cumberbatch played?","Spider Man","Joker","Sherlock Holmes","Hulk","Sherlock Holmes");
  let quizzGeneralKnowledge6 = new Quiz("What company was initially known as Blue Ribbon Sports? ","Dior","Nike","Puma","Zara","Nike");
  let quizzGeneralKnowledge7 = new Quiz("What country has won the most World Cups?","Brazil","France","Italy","Romania","Brazil");
  let quizzGeneralKnowledge8 = new Quiz("What is the largest Spanish-speaking city in the world?","Barcelona","Madrid","Sevilla","Mexico");
  let quizzGeneralKnowledge9 = new Quiz("The Parthenon Marbles are controversially located in what museum?","The British Museum","The Museum of Modern Art","The Vatican Museum","Louvre Museum","The British Museum");
  let quizzGeneralKnowledge10 = new Quiz("What city is known as The Eternal City?","Berlin","Tokyo","Amsterdam","Rome","Rome");
  let quizzGeneralKnowledge11 = new Quiz("How many lives is a cat said to have?",3,6,9,12,9);
  let quizzGeneralKnowledge12 = new Quiz("The Beach starring Leonardo DiCaprio is set in which country?","Thailand","Japan","France","Romania","Thailand");
  
  
  let quizzHistory1 = new Quiz("What language was spoken in Ancient Rome?", "Latin", "Chinesse", "Arabic","German", "Latin");
  let quizzHistory2 = new Quiz("The First Opium War was fought between Great Britain and which other country?","Germany", "Italy", "Spain", "China", "China");
  let quizzHistory3 = new Quiz("Which President of the United States abolished slavery?","George Washington","Abraham Lincoln","James Madison","Franklin Pierce","Abraham Lincoln");
  let quizzHistory4 = new Quiz("In what year did the French Revolution start?", 1789, 2000, 1654, 1795, 1789);
  let quizzHistory5 = new Quiz("Which Caribbean country played a key role in The Missile Scare during the Cold War?", "Cuba", "Jamaica", "Grenada", "Belize", "Cuba");
  let quizzHistory6 = new Quiz("What country gifted the United States with the Statue of Liberty?", "Romania","France", "Italy", "England","France");
  let quizzHistory7 = new Quiz("In which ocean did the Titanic sink?", "Indian Ocean", "Arctic Ocean", "Southern Ocean", "Atlantic Ocean","Atlantic Ocean");
  let quizzHistory8 = new Quiz("Who is the founder of the Communist Party?","Lenin", "Iosif Stalin", "Karl Max", "Adolf Hitler","Lenin");
  let quizzHistory9 = new Quiz("Julius Caesar is born in which city?","London", "Barcelona", "Rome", "Berlin","Rome");
  let quizzHistory10 = new Quiz("What is another name for the Great Pyramid in Egypt?","Menkaure", "Khafre", "Giza","Chepren","Giza");
  let quizzHistory11 = new Quiz("When did the Berlin Wall fall?", 1989,1756, 1900, 1643,1989);
  let quizzHistory12 = new Quiz("How many wars did the Carthaginians fight with the Romans?", 2,4,5,3,3);
  
  
  let quizzMathematics1 = new Quiz("121 Divided by 11 is?",11,10,19,18,11);
  let quizzMathematics2 = new Quiz("What is the Next Prime Number after 7 ?",13,12,14,11,11 );
  let quizzMathematics3 = new Quiz("Solve 23 + 3 ÷ 3 ", 24,25,26,27,24);
  let quizzMathematics4 = new Quiz("How Many Months Have 120 Days?", "2 months","4 months","12 months","11 months","4 months");
  let quizzMathematics5 = new Quiz("How many vertices are present on a cube?",8,10,12,20,8);
  let quizzMathematics6 = new Quiz("Solve the following equation: -15 + (-5x)=0",-3,2,-5,10,-3 );
  let quizzMathematics7 = new Quiz("Calculate the quotient of 150 and 3",34,50,22,11,50 );
  let quizzMathematics8 = new Quiz("What is the only prime number that is even?",1,4,9,2,2 );
  let quizzMathematics9 = new Quiz("Who is known as the prince of mathematicians?","Luitzen Egbertus Jan Brouwer","Leonardo Fibonacci","Carl Friedrich Gauss","Pitagora","Carl Friedrich Gauss");
  let quizzMathematics10 = new Quiz("Gottfried Wilhelm Leibniz and another scientist discovered the fundamental theorem of calculus independently in the 17th century? Who is he?","Georg Riemann","Guillaume de l Hôpital","Isaac Newton","Albert Einstein","Isaac Newton");
  let quizzMathematics11 = new Quiz("How many sides does an enneadecagon have",19,21,3,9,19 );
  let quizzMathematics12 = new Quiz("Who developed number-based paint?","Arhimede","Phytagoras","Leonardo Da Vinci","Euclid","Leonardo Da Vinci" );
  
  if (category == "generalKnowledge") {
    arrayQuizz = [quizzGeneralKnowledge1,quizzGeneralKnowledge2,quizzGeneralKnowledge3,quizzGeneralKnowledge4,quizzGeneralKnowledge5,quizzGeneralKnowledge6,quizzGeneralKnowledge7,quizzGeneralKnowledge8,quizzGeneralKnowledge9,quizzGeneralKnowledge10,quizzGeneralKnowledge11,quizzGeneralKnowledge12];
  } else if (category == "history") {
    arrayQuizz = [quizzHistory1,quizzHistory2,quizzHistory3,quizzHistory4,quizzHistory5,quizzHistory6,quizzHistory7,quizzHistory8,quizzHistory9,quizzHistory10,quizzHistory11,quizzHistory12];
  } else if (category == "mathematics") {
    arrayQuizz = [quizzMathematics1,quizzMathematics2,quizzMathematics3,quizzMathematics4,quizzMathematics5,quizzMathematics6,quizzMathematics7,quizzMathematics8,quizzMathematics9,quizzMathematics10,quizzMathematics11,quizzMathematics12];
  } else if (category == "astronomy") {
    arrayQuizz = [quizzAstronomy1,quizzAstronomy2,quizzAstronomy3,quizzAstronomy4,quizzAstronomy5,quizzAstronomy6,quizzAstronomy7,quizzAstronomy8,quizzAstronomy9,quizzAstronomy10,quizzAstronomy11,quizzAstronomy12];
  }

   
  let firstQuizz = arrayQuizz[0];
  quesetionHeading.innerText = firstQuizz.question;
  option1Div.innerText = firstQuizz.option1;
  option2Div.innerText = firstQuizz.option2;
  option3Div.innerText = firstQuizz.option3;
  option4Div.innerText = firstQuizz.option4;
  
  let currentQuiz = 0;
  
  let correctQuestionCounter = 0;
  
  let selectedOption;
  
  function onSubmit() {
    if (selectedOption == arrayQuizz[currentQuiz].correctOption) {
      correctQuestionCounter = correctQuestionCounter + 1;
    }
  
    
    currentQuiz = currentQuiz + 1;
  
    
    if (currentQuiz == arrayQuizz.length) {
      
      score.style.display = "flex";
      questionWrapper.style.display = "none";
      string.innerText = correctQuestionCounter;
  
      
    } else {
      quesetionHeading.innerText = arrayQuizz[currentQuiz].question;
      option1Div.innerText = arrayQuizz[currentQuiz].option1;
      option2Div.innerText = arrayQuizz[currentQuiz].option2;
      option3Div.innerText = arrayQuizz[currentQuiz].option3;
      option4Div.innerText = arrayQuizz[currentQuiz].option4;
  
      option1Div.classList.remove("option-selected");
      option2Div.classList.remove("option-selected");
      option3Div.classList.remove("option-selected");
      option4Div.classList.remove("option-selected");
  
      submitButton.disabled = true;
    }
  }
  
  function onOption1Click() {
    selectedOption = arrayQuizz[currentQuiz].option1;
    submit.disabled = false;
    option1Div.classList.add("option-selected");
  
    option2Div.classList.remove("option-selected");
    option3Div.classList.remove("option-selected");
    option4Div.classList.remove("option-selected");
  }
  
  function onOption2Click() {
    selectedOption = arrayQuizz[currentQuiz].option2;
    submit.disabled = false;
    option2Div.classList.add("option-selected");
  
    option1Div.classList.remove("option-selected");
    option3Div.classList.remove("option-selected");
    option4Div.classList.remove("option-selected");
  }
  
  function onOption3Click() {
    selectedOption = arrayQuizz[currentQuiz].option3;
    submit.disabled = false;
    option3Div.classList.add("option-selected");
  
    option1Div.classList.remove("option-selected");
    option2Div.classList.remove("option-selected");
    option4Div.classList.remove("option-selected");
  }
  
  function onOption4Click() {
    selectedOption = arrayQuizz[currentQuiz].option4;
    submit.disabled = false;
    option4Div.classList.add("option-selected");
  
    option1Div.classList.remove("option-selected");
    option2Div.classList.remove("option-selected");
    option3Div.classList.remove("option-selected");
  }