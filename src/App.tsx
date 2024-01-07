// import { useState } from 'react';
import './App.css';
import Field from "./components/Field/Field.tsx";
import Counter from "./components/Counter/Counter.tsx";
import Button from "./components/Button/Button.tsx";
import Block from "./components/Block/Block.tsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Field>
        <Block></Block>
      </Field>
        <Counter counter={1}></Counter>
        <Button></Button>
    </>
  )
}

export default App
