import React from 'react';

export interface DocumentTitleContextProps {
    setTitle: (title: string) => void;
    setText: (text: string) => void;
    clearText: () => void;
}

const DocumentTitleContext = React.createContext<DocumentTitleContextProps>({
    setTitle: () => {},
    setText: () => {},
    clearText: () => {}
});

export default DocumentTitleContext;
