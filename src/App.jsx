import { useState } from "react";
import "./App.css"

function App() {
  const [number1, setNumber1] = useState({currentNumber: "0", storedNumber: ""})
  const [number2, setNumber2] = useState({currentNumber: "0", storedNumber: ""})
  const [result, setResult] = useState({currentNumber: "0", storedNumber: ""})
  const [operator, setOperator] = useState("+")

  const updateNumber1 = (number) => {
    setNumber1({ ...number1, currentNumber: appendNumber(number1.currentNumber, number)})
  }

  const clearNumber1 = () => {
    setNumber1({ ...number1, currentNumber: "0" })
  }

  const storeNumber1 = () => {
    setNumber1({ ...number1, storedNumber: number1.currentNumber })
  }

  const recallNumber1 = () => {
    if (number1.storedNumber.length > 0) {
      setNumber1({ ...number1, currentNumber: number1.storedNumber })
    }
  }

  const updateNumber2 = (number) => {
    setNumber2({ ...number2, currentNumber: appendNumber(number2.currentNumber, number)})
  }

  const clearNumber2 = () => {
    setNumber2({ ...number2, currentNumber: "0" })
  }

  const storeNumber2 = () => {
    setNumber2({ ...number2, storedNumber: number2.currentNumber })
  }

  const recallNumber2 = () => {
    if (number2.storedNumber.length > 0) {
      setNumber2({ ...number2, currentNumber: number2.storedNumber })
    }
  }

  const appendNumber = (currentNumber, newNumber) => {
    const regexOnlyZero = /^[0]+$/
    if (regexOnlyZero.test(currentNumber)) {
      return newNumber
    }
    if (currentNumber.includes(".") && newNumber == ".") {
      return currentNumber
    }
    return `${currentNumber}${newNumber}`
  }

  const calculateResult = () => {
    const regexOnlyDot = /^[.]+$/
    const regexOnlyZeroDot = /^[0.]+$/
    if (operator === "/" && regexOnlyZeroDot.test(number2.currentNumber)) {
      setResult("DivideByZero")
    } else if (regexOnlyDot.test(number1.currentNumber) || regexOnlyDot.test(number2.currentNumber)) {
      setResult("Invalid Number")
    } else {
      const newResult = eval(`${number1.currentNumber} ${operator} ${number2.currentNumber}`).toFixed(5)
      setResult({ ...result, currentNumber: newResult })
    }
  }

  const storeResult = () => {
    setResult({ ...result, storedNumber: result.currentNumber })
  }

  const recallResult = () => {
    if (result.storedNumber.length > 0) {
      setResult({ ...result, currentNumber: result.storedNumber })
    }
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p>{number1.currentNumber}</p>
        <div className="numbers">
          <button onClick={() => updateNumber1("1")}>1</button>
          <button onClick={() => updateNumber1("2")}>2</button>
          <button onClick={() => updateNumber1("3")}>3</button>
          <button onClick={() => updateNumber1("4")}>4</button>
          <button onClick={() => updateNumber1("5")}>5</button>
          <button onClick={() => updateNumber1("6")}>6</button>
          <button onClick={() => updateNumber1("7")}>7</button>
          <button onClick={() => updateNumber1("8")}>8</button>
          <button onClick={() => updateNumber1("9")}>9</button>
          <button onClick={() => updateNumber1("0")}>0</button>
          <button onClick={() => clearNumber1()}>Clear</button>
          <button onClick={() => updateNumber1(".")}>.</button>
          <button onClick={() => storeNumber1()}>Store</button>
          <button onClick={() => recallNumber1()}>Recall</button>
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
        <p>{number2.currentNumber}</p>
        <div className="numbers">
          <button onClick={() => updateNumber2("1")}>1</button>
          <button onClick={() => updateNumber2("2")}>2</button>
          <button onClick={() => updateNumber2("3")}>3</button>
          <button onClick={() => updateNumber2("4")}>4</button>
          <button onClick={() => updateNumber2("5")}>5</button>
          <button onClick={() => updateNumber2("6")}>6</button>
          <button onClick={() => updateNumber2("7")}>7</button>
          <button onClick={() => updateNumber2("8")}>8</button>
          <button onClick={() => updateNumber2("9")}>9</button>
          <button onClick={() => updateNumber2("0")}>0</button>
          <button onClick={() => clearNumber2()}>Clear</button>
          <button onClick={() => updateNumber2(".")}>.</button>
          <button onClick={() => storeNumber2()}>Store</button>
          <button onClick={() => recallNumber2()}>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result.currentNumber}</p>
        <div>
          <button onClick={() => calculateResult()}>=</button>
          <button onClick={() => storeResult()}>Store</button>
          <button onClick={() => recallResult()}>Recall</button>
        </div>
      </div>
    </div>
  )
}

export default App
