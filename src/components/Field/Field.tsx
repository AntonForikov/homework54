import React from 'react';
import {block} from "../../types";


interface Props {
    children: React.ReactNode;
    winArr: block[],
}

const Field: React.FC<Props> = ({children, winArr}) => {
    const fieldStyle: React.CSSProperties = {
        display: "flex",
        width: "240px",
        flexWrap: "wrap",
        position: "relative",
    };

    const winStyle: React.CSSProperties = {
        position: "absolute",
        backgroundColor: "grey",
        width: "100%",
        height: "100%",
        opacity: "0.5",
        color: "black",
        fontWeight: "600",
        fontSize: "20px",
        display: "none",
        alignItems: "center",
        justifyContent: "center"
    };

    for (let i = 0; i < winArr.length; i++) {
        if (winArr[i].clicked && winArr[i].hasItem) {
            winStyle.display = "flex";
        }
    }

    return (
        <div style={fieldStyle}>
            <div style={winStyle}>You win!</div>
            {children}
        </div>
    );
};

export default Field;