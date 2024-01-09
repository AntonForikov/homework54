import React, {useState} from 'react';
import './App.css';
import Field from "./components/Field/Field.tsx";
import Counter from "./components/Counter/Counter.tsx";
import Button from "./components/Button/Button.tsx";
import Block from "./components/Block/Block.tsx";
import {block} from "./types";

const startState = () => {
    const arr: block[] = [];
    for (let i = 0; i < 36; i++) {
        arr.push({hasItem: false, clicked: false, id: i});
    }
    const randomIdx = Math.floor(Math.random() * arr.length);
    arr[randomIdx].hasItem = true;
    return arr;
}

function App() {
    const [blockList, setBlockList] = useState(startState());

    const click = (idx: number) => {
        const blockListCopy = [...blockList];
        blockListCopy[idx].clicked = true;
        setBlockList([...blockListCopy]);
    };

    const resetGame = () => {
        const blockListCopy = startState();
        setBlockList([...blockListCopy]);
    };

    const blocks: React.ReactNode = (
        <>
            {
                blockList.map((block) => {
                    return <Block hasItem={block.hasItem} clicked={block.clicked} key={block.id} onClick={() => click(block.id)}/>
                })
            }
        </>
    );

    return (
        <>
            <Field winArr={blockList}>
                {blocks}
            </Field>
            <Counter counterArr={blockList}></Counter>
            <Button onClick={resetGame}></Button>
        </>
    );
}

export default App;