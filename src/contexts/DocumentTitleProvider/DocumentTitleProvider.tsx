import React from 'react';
import DocumentTitleContext from '../DocumentTitleContext';

export interface DocumentTitleProviderProps {
    children: React.ReactNode;
}

const DocumentTitleProvider: React.FC<DocumentTitleProviderProps> = ({ children }) => {
    const [title, setDocumentTitle] = React.useState<string>('');
    const [documentTitleSuffix, setDocumentTitleSuffix] = React.useState<string>('');

    React.useEffect(() => {
        document.title = documentTitleSuffix ? `${title} - ${documentTitleSuffix}` : title;
    }, [title, documentTitleSuffix]);

    const clearDocumentTitleSuffix = () => {
        setDocumentTitleSuffix('');
    };

    return (
        <DocumentTitleContext.Provider
            value={{ setDocumentTitle, setDocumentTitleSuffix, clearDocumentTitleSuffix }}>
            {children}
        </DocumentTitleContext.Provider>
    );
};

export default DocumentTitleProvider;
