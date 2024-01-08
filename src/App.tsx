import React, {useState} from 'react';
import './App.css';
import Field from "./components/Field/Field.tsx";
import Counter from "./components/Counter/Counter.tsx";
import Button from "./components/Button/Button.tsx";
import Block from "./components/Block/Block.tsx";

interface block {
    id: number
    hasItem: boolean,
    clicked: boolean,
}

const startState = () => {
    const arr: block[] = []
    for (let i = 0; i < 36; i++) {
        arr.push({hasItem: false, clicked: false, id: i});
    }
    const randomIdx = Math.floor(Math.random() * arr.length);
    arr[randomIdx].hasItem = true;
    return arr;
}

function App() {
    const [blockList, setBlockList] = useState(startState());

    const counter = () => {
        const count = blockList.filter((block) => {
            return block.clicked
        })
        return count.length
    }
    const click = (idx: number) => {
        const blockListCopy = [...blockList];
        blockListCopy[idx].clicked = true;
        setBlockList([...blockListCopy]);
    }

    const resetGame = () => {
        const blockListCopy = startState();
        setBlockList([...blockListCopy])
    }

    const blocks: React.ReactNode = (
        <>
            {
                blockList.map((block) => {
                    return <Block hasItem={block.hasItem} clicked={block.clicked} key={block.id} onClick={() => click(block.id)}/>
                })
            }
        </>
    )

    return (
        <>
            <Field>
                {blocks}
            </Field>
            <Counter counter={counter()}></Counter>
            <Button onClick={resetGame}></Button>
        </>
    )
}

export default App
