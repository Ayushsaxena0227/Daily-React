// import React, { useState } from "react";

// const Calculator = () => {
//   const [num1, setnum1] = useState("");
//   const [num2, setnum2] = useState("");
//   const [res, Setres] = useState(null);
//   const handlecalculations = (operation) => {
//     const a = parseFloat(num1);
//     const b = parseFloat(num2);
//     if (isNaN(a) || isNaN(b)) {
//       Setres(null);
//       //   return;
//     }
//     let result;
//     switch (operation) {
//       case "+":
//         result = a + b;
//         break;

//       case "-":
//         result = a - b;
//         break;

//       case "*":
//         result = a * b;
//         break;

//       case "/":
//         res = b === 0 ? "Cannot divide by 0" : a / b;
//         break;

//       default:
//         res = "Default operation";
//     }
//     Setres(Number(result.toFixed(2)));
//     setnum1("");
//     setnum2("");
//   };

//   return (
//     <div style={{}}>
//       <h2>SIMPLE CALCULATOR</h2>
//       <input
//         type="number"
//         placeholder="Enter first num1"
//         value={num1}
//         onChange={(e) => setnum1(e.target.value)}
//       />
//       <input
//         type="number"
//         value={num2}
//         onChange={(e) => setnum2(e.target.value)}
//         placeholder="Enter first num2"
//       />
//       <div style={{}}>
//         <button onClick={() => handlecalculations("+")}>+</button>
//         <button onClick={() => handlecalculations("-")}>-</button>
//         <button onClick={() => handlecalculations("*")}>*</button>
//         <button onClick={() => handlecalculations("/")}>/</button>
//       </div>

//       <div>
//         {res != null && (
//           <p>
//             Result: <strong>{res}</strong>
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Calculator;
