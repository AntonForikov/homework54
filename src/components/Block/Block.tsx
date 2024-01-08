import React from 'react';

interface Props {
    hasItem: boolean,
    clicked: boolean,
    onClick: React.MouseEventHandler
}

const Block: React.FC <Props> = ({hasItem, clicked, onClick}) => {

    const blockStyle = {
        display: "Block",
        width: "30px",
        height: "30px",
        backgroundColor: "green",
        margin: "5px"
    };

    if (clicked) {
        blockStyle.backgroundColor = "red"
    }

    if (hasItem) {return <div style={blockStyle} onClick={onClick}>O</div>}
    else {return <div style={blockStyle} onClick={onClick}></div>}
};
export default Block;