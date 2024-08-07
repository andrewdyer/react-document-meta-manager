import React from 'react';

export interface DocumentTitleContextProps {
    setTitle: (title: string) => void;
}

const DocumentTitleContext = React.createContext<DocumentTitleContextProps>({
    setTitle: () => {}
});

export default DocumentTitleContext;
