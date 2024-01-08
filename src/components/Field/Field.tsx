import React from 'react';

interface Props {
    children: React.ReactNode;
}

const fieldStyle = {
    display: "flex",
    width: "240px",
    flexWrap: "wrap"
}

const Field: React.FC<Props> = ({children}) => {
    return (
        <div style={fieldStyle}>
            {children}
        </div>
    );
};

export default Field;