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
        <label htmlFor="num">Your Number : </label>
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
        There are {allPrimes.length} prime(s) numbers between 1 and{" "}
        {selectedNum} :{" "}
        <span className="prime__list">{allPrimes.join(",")}</span>
      </p>
    </>
  );
}
function isPrime(n) {
  const max = Math.ceil(Math.sqrt(n));

  if (n === 2) {
    return true;
  }

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false;
    }
  }
  return true;
}
export default App;
