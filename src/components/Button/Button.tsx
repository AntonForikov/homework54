import React from 'react';

interface Props {
    onClick: React.MouseEventHandler
}
const Button: React.FC<Props> = ({onClick}) => {
    return (
        <button onClick={onClick}>
            Reset
        </button>
    );
};

export default Button;