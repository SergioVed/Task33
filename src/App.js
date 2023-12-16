import { Select } from "./components/select";
import { Input } from "./components/input";
import { Result } from "./components/result";
import { useState } from "react";
import './App.css'

function App() {
  const [select1, setSelect1] = useState()
  const [select2, setSelect2] = useState()
  const [inputValue, setInputValue] = useState()
  const [result, setResult] = useState()
  const optionList = [
    {value: "mm", label: "MM"},
    {value: "cm", label: "CM"},
    {value: "m", label: "M"}
  ]
  function convert() {
    let unifyVal
    let result
    switch (select1) {
      case "mm":
        unifyVal = inputValue/1000
        break;
      case "cm":
        unifyVal = inputValue/100
        break;
      default:
        case "m":
          unifyVal = inputValue
          break;
    }
    switch (select2) {
      case "mm":
        result = unifyVal*1000
        break;
      case "cm":
        result = unifyVal*100
        break;
      default:
        case "m":
          result = unifyVal
          break;
    }
    setResult(result)
  }
  return(
    <>
      <Select options={optionList} onChange={(event) => {setSelect1(event.target.value)}}/>
      <Input onChange={(event) => {setInputValue(event.target.value)}}/>
      <Select options={optionList} onChange={(event) => {setSelect2(event.target.value)}}/> 
      <Result result={result}/>
      <button onClick={convert}>setResult</button>
    </>
  )
}

export default App;
