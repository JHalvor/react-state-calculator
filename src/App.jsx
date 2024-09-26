import { useState } from "react";
import "./App.css"

function App() {
  const [number1, setNumber1] = useState("0")
  const [number2, setNumber2] = useState("0")
  const [result, setResult] = useState("0")
  const [operator, setOperator] = useState("+")

  const clearNumber1 = () => {
    setNumber1("0")
  }

  const updateNumber1 = (number) => {
    setNumber1(appendNumber(number1, number))
  }

  const updateNumber2 = (number) => {
    setNumber2(appendNumber(number2, number))
  }

  const clearNumber2 = () => {
    setNumber2("0")
  }

  const appendNumber = (currentNumber, newNumber) => {
    const regexOnlyZero = /^[0]+$/
    if (regexOnlyZero.test(currentNumber)) {
      return newNumber
    }
    return `${currentNumber}${newNumber}`
  }

  const calculateResult = () => {
    const regexOnlyDot = /^[.]+$/
    const regexOnlyZeroDot = /^[0.]+$/
    if (operator === "/" && regexOnlyZeroDot.test(number2)) {
      setResult("DivideByZero")
    } else if (regexOnlyDot.test(number1) || regexOnlyDot.test(number2)) {
      setResult("Invalid Number")
    } else {
      setResult(eval(`${number1} ${operator} ${number2}`).toFixed(6))
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{number1}</p>
        <div className="numbers">
          <button onClick={() => updateNumber1(1)}>1</button>
          <button onClick={() => updateNumber1(2)}>2</button>
          <button onClick={() => updateNumber1(3)}>3</button>
          <button onClick={() => updateNumber1(4)}>4</button>
          <button onClick={() => updateNumber1(5)}>5</button>
          <button onClick={() => updateNumber1(6)}>6</button>
          <button onClick={() => updateNumber1(7)}>7</button>
          <button onClick={() => updateNumber1(8)}>8</button>
          <button onClick={() => updateNumber1(9)}>9</button>
          <button onClick={() => updateNumber1(0)}>0</button>
          <button onClick={() => clearNumber1()}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operator === "/" ? "÷" : operator}</p>
        <div className="numbers">
          <button onClick={() => setOperator("+")}>+</button>
          <button onClick={() => setOperator("-")}>-</button>
          <button onClick={() => setOperator("*")}>*</button>
          <button onClick={() => setOperator("/")}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{number2}</p>
        <div className="numbers">
          <button onClick={() => updateNumber2(1)}>1</button>
          <button onClick={() => updateNumber2(2)}>2</button>
          <button onClick={() => updateNumber2(3)}>3</button>
          <button onClick={() => updateNumber2(4)}>4</button>
          <button onClick={() => updateNumber2(5)}>5</button>
          <button onClick={() => updateNumber2(6)}>6</button>
          <button onClick={() => updateNumber2(7)}>7</button>
          <button onClick={() => updateNumber2(8)}>8</button>
          <button onClick={() => updateNumber2(9)}>9</button>
          <button onClick={() => updateNumber2(0)}>0</button>
          <button onClick={() => clearNumber2()}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => calculateResult()}>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
