import "./App.css";
import React, { useState } from "react";

function App() {
  const [selectedNum, setSelectedNum] = useState(100);

  const allPrimes = [];
  for (let counter = 2; counter < selectedNum; counter++) {
    if (isPrime(counter)) {
      allPrimes.push(counter);
    }
  }
  return (
    <>
      <div className="App">
        <h2>Prime Number</h2>
      </div>
      <form action="">
        <label htmlFor="num">Your Prime:</label>
        <input
          type="number"
          value={selectedNum}
          onChange={(event) => {
            let num = Math.min(100_000, Number(event.target.value));
            setSelectedNum(num);
          }}
        />
      </form>
      <p>
        there are {allPrimes.length} prime(s) between 1 and {selectedNum}:{" "}
        <span>{allPrimes.join(",")}</span>
      </p>
    </>
  );
}

export default App;
