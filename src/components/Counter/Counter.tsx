import React from 'react';

interface Props {
    counter: number
}
const Counter: React.FC<Props> = ({counter}) => {
    return (
        <div>
            Tries: {counter}
        </div>
    );
};

export default Counter;