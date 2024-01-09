import React from 'react';
import {block} from "../../types";

interface Props {
    counterArr: block[]
}
const Counter: React.FC<Props> = ({counterArr}) => {
    const counter = () => {
        const count = counterArr.filter((block) => {
            return block.clicked;
        });
        return count.length;
    };

    const counterStyle: React.CSSProperties ={
        marginTop: "20px",
        marginBottom: "20px"
    };

    return (
        <div style={counterStyle}>
            Tries: {counter()}
        </div>
    );
};

export default Counter;