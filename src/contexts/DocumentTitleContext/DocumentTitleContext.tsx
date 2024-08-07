import React from 'react';

export interface DocumentTitleContextProps {
    setDocumentTitle: (title: string) => void;
    setText: (text: string) => void;
    clearText: () => void;
}

const DocumentTitleContext = React.createContext<DocumentTitleContextProps>({
    setDocumentTitle: () => {},
    setText: () => {},
    clearText: () => {}
});

export default DocumentTitleContext;
