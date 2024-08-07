import React from 'react';

export interface DocumentTitleContextProps {
    setTitle: (title: string) => void;
    setText: (text: string) => void;
}

const DocumentTitleContext = React.createContext<DocumentTitleContextProps>({
    setTitle: () => {},
    setText: () => {}
});

export default DocumentTitleContext;
