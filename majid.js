//THIS IS CORE PART OF STEP 3

const questionEl = document.querySelector("#question");
let storeAnswer;

// THIS IS CORE PART OF STEP 4

const quertionformEl = document.querySelector("#quertionform");
const scoresEl = document.querySelector("#scores");
let score = 0;

// //STEP 1
//create random number (min and max)

const randomNumber = (max, min) => {
  return Math.round(Math.random() * (max - min + 1) + min);
};

// //STEP 2
// generate question and also change question code
const QuestionGenerate = () => {
  const randomNumber1 = randomNumber(0, 10);
  const randomNumber2 = randomNumber(0, 10);
  const Question = `What is ${randomNumber1} multiplay by ${randomNumber2} ?`;
  const Answer = randomNumber1 * randomNumber2;
  //   console.log(Question);
  return { Question, Answer };
};

// //STEP 3
// //show answer in browser code

const showAnswer = () => {
  const { Question, Answer } = QuestionGenerate();
  questionEl.innerText = Question;
  storeAnswer = Answer;
};
showAnswer();

// //STEP 4
// check answer  and get form data

const AnswerCheck = (event) => {
  event.preventDefault();
  const formData = new FormData(quertionformEl);
  const UserAnswer = parseInt(formData.get("anser"));
  if (UserAnswer == storeAnswer) {
    score += 1;
  } else {
    score -= 1;
    alert(`${UserAnswer} Wrong Answer ? Correct Answer is ${storeAnswer}`);
  }
  scoresEl.innerText = score;
  showAnswer();
  //THIS IS PAGE RESET CODE
  event.target.reset();
};
