import React from 'react';

export interface DocumentMetaContextProps {
    setDocumentTitle: (title: string) => void;
    setDocumentTitleSuffix: (text: string) => void;
    clearDocumentTitleSuffix: () => void;
}

const DocumentMetaContext = React.createContext<DocumentMetaContextProps>({
    setDocumentTitle: () => {},
    setDocumentTitleSuffix: () => {},
    clearDocumentTitleSuffix: () => {}
});

export default DocumentMetaContext;
