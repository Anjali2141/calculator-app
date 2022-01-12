import React, { useState } from 'react' ;
import './App.css';

function App() {

const [result, setResult] = useState("");

const handleClick = (e) => {
  setResult(result.concat(e.target.name));  
}

const clear = () => {
  setResult("") ;
}

const backspace = () => {
  setResult(result.slice(0, result.length-1)); // (0, -1) 
}

const ans = () => {
try {
  // eslint-disable-next-line no-eval
  setResult(eval(result).toString());
} catch(err){
  setResult("Error") ;
}

}

  return (
    <>
    <div className="App">

      <div className="container">
        <div className="output">
        <form>
          <input type="text" value={result || "0"}/>
        </form>

          {/* {result? <span>[ {result} ]</span>:" "} */}

          {/* {result || "0"} */}

        </div>


        <div className="btn">
          <button className="bg" onClick={clear} id="clear">Clear</button>
          <button className="bg" onClick={backspace} id="backspace">C</button>
          <button className="bg" name="/" onClick={handleClick}>&divide;</button>
          <button name="7" onClick={handleClick}>7</button>
          <button name="8" onClick={handleClick}>8</button>
          <button name="9" onClick={handleClick}>9</button>
          <button className="bg" name="*" onClick={handleClick}>&times;</button>
          <button name="4" onClick={handleClick}>4</button>
          <button name="5" onClick={handleClick}>5</button>
          <button name="6" onClick={handleClick}>6</button>
          <button className="bg" name="-" onClick={handleClick}>&ndash;</button>
          <button name="1" onClick={handleClick}>1</button>
          <button name="2" onClick={handleClick}>2</button>
          <button name="3" onClick={handleClick}>3</button>
          <button className="bg" name="+" onClick={handleClick}>+</button>
          <button name="0" onClick={handleClick}>0</button>
          <button className="bg" name="." onClick={handleClick}>.</button>
          <button className="bg" onClick={ans} id="result">=</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
