


// import React, { useState } from "react";

// const questions = [
//   {
//     questionText: "Question 1",
//     answerOptions: [
//       { answerText: "Option 1", isCorrect: true },
//       { answerText: "Option 2", isCorrect: false },
//       { answerText: "Option 3", isCorrect: false },
//     ],
//   },
//   {
//     questionText: "Question 2",
//     answerOptions: [
//       { answerText: "Option 1", isCorrect: false },
//       { answerText: "Option 2", isCorrect: true },
//       { answerText: "Option 3", isCorrect: false },
//     ],
//   },
//   {
//     questionText: "Question 3",
//     answerOptions: [
//       { answerText: "Option 1", isCorrect: false },
//       { answerText: "Option 2", isCorrect: false },
//       { answerText: "Option 3", isCorrect: true },
//     ],
//   },
// ];

// const Quiz = () => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [score, setScore] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [isTransitioning, setIsTransitioning] = useState(false);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsTransitioning(true);
//     setTimeout(() => {
//       handleNextQuestion();
//     }, 1000);
//   };

//   const handleNextQuestion = () => {
//     setSelectedOptions([...selectedOptions, selectedOption]);
//     setCurrentQuestion(currentQuestion + 1);
//     setIsTransitioning(false);
//     setSelectedOption(null);
//   };

//   const renderOptions = () => {
//     return (
//       <div>
//         {questions[currentQuestion].answerOptions.map((option, index) => {
//           return (
//             <div key={index}>
//               <input
//                 type="radio"
//                 id={option.answerText}
//                 name="option"
//                 value={option.answerText}
//                 onClick={() => throwThing()}
//                 checked={selectedOption === option.answerText}
//                 onChange={() => handleOptionSelect(option.answerText)}
//               />
//               <label htmlFor={option.answerText}>{option.answerText}</label>
//             </div>
//           );
//         })}
//       </div>
//     );
//   };

//   const renderQuiz = () => {
//     if (currentQuestion >= questions.length) {
//       return (
//         <div>
//           <h1>Quiz Complete!</h1>
//           <p>
//             Your score is {score} out of {questions.length}.
//           </p>
//           <button onClick={() => setCurrentQuestion(0)}>Restart Quiz</button>
//         </div>
//       );
//     } else {
//       return (
//         <div className={isTransitioning ? "transition" : ""}>
//           <h1>{questions[currentQuestion].questionText}</h1>
//           {renderOptions()}
//           {currentQuestion === questions.length - 1 && (
//             <button onClick={() => handleNextQuestion()}>Finish Quiz</button>
//           )}
//         </div>
//       );
//     }
//   };

//   return <div>{renderQuiz()}</div>;
// };

// export default Quiz;
