import "./App.css";
// import react from "react";

function App() {
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
          }}
        />
      </form>
    </>
  );
}

export default App;
