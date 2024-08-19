// Note : uncomment the component which you want to see and comment other

// Example 1

import { useEffect, useState } from "react";

// export const App = () => {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     console.log("Count :", count)
//   }, [count])

//   return (
//     <div className="container effect-container">
//       <h1>useEffect Hook</h1>
//       <p>Count : {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   )
// }

// export default App

// Example 2

// const Ex = () => {
//   const [date, setDate] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       const updatedDate = new Date();
//       setDate(updatedDate.toLocaleTimeString());
//     }, 1000);
//   }, []);

//   return (
//     <div className="container effect-container">
//       <h1> Date : {date} </h1>
//     </div>
//   );
// };

// export default Ex;

// Interesting challenge and mini effect

function Ex() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `count ${count}`
  }, [count])
  
  useEffect(() => {
    console.log(name)
  }, [name])
  
  return (
    <div className="container effect-container">
      <h1>useEffect Challenge</h1>
      <p>
        Count : <span> {count} </span>
      </p>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <p>
        Name : <span> {name} </span>
      </p>
      <input
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Ex;
