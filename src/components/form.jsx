import form from "../components/form.png";
// import styles  from "./header.module.css";

export function Form() {
  return (
    <form>
      <img src={form} alt="Form" />
    </form>
  );
}



//import React from "react";
// import React, { useState } from 'react';

// const QuestionAnswerForm=() =>{
//     const [question, setQuestion] = useState("");
//     const [answer, setAnswer] = useState("");
//     const [entries, setEntries] = useState([]);
  
//     const handleAdd = (e) => {
//       e.preventDefault(); // Prevent page refresh on form submission
//       if (question && answer) {
//         setEntries([...entries, { question, answer }]);
//         setQuestion(""); // Clear the input fields
//         setAnswer("");
//       }
//     };
  
//     return (
//       <div>
//         <form onSubmit={handleAdd}>
//           <div>
//             <label>
//               Question:
//               <input
//                 type="text"
//                 value={question}
//                 onChange={(e) => setQuestion(e.target.value)}
//                 placeholder="Enter your question"
//                 required
//               />
//             </label>
//           </div>
//           <div>
//             <label>
//               Answer:
//               <input
//                 type="text"
//                 value={answer}
//                 onChange={(e) => setAnswer(e.target.value)}
//                 placeholder="Enter your answer"
//                 required
//               />
//             </label>
//           </div>
//           <button type="submit">Add</button>
//         </form>
  
      
//         </div>
//             );
//             };

//             export default QuestionAnswerForm;
//           {/* <h3>Entries:</h3>
//           <ul>
//             {entries.map((entry, index) => (
//               <li key={index}>
//                 <strong>Q:</strong> {entry.question} <br />
//                 <strong>A:</strong> {entry.answer}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     );
//   };
//    */}
