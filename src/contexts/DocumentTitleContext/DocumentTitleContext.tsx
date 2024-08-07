import React from 'react';

export interface DocumentTitleContextProps {
    setDocumentTitle: (title: string) => void;
    setDocumentTitleSuffix: (text: string) => void;
    clearDocumentTitleSuffix: () => void;
}

const DocumentTitleContext = React.createContext<DocumentTitleContextProps>({
    setDocumentTitle: () => {},
    setDocumentTitleSuffix: () => {},
    clearDocumentTitleSuffix: () => {}
});

export default DocumentTitleContext;
