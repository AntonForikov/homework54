import React from 'react';

interface Props {
    children: React.ReactNode
}

const Field: React.FC<Props> = ({children}) => {
    const fieldStyle = {
        display: "flex",
    }

    return (
        <div style={fieldStyle}>
            {children}
        </div>
    );
};

export default Field;