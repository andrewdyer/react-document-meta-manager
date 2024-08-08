import React from 'react';
import DocumentMetaContext from '../DocumentMetaContext';

export interface DocumentMetaProviderProps {
    children: React.ReactNode;
}

const DocumentMetaProvider: React.FC<DocumentMetaProviderProps> = ({ children }) => {
    const [title, setDocumentTitle] = React.useState<string>('');
    const [documentTitleSuffix, setDocumentTitleSuffix] = React.useState<string>('');

    React.useEffect(() => {
        document.title = documentTitleSuffix ? `${title} - ${documentTitleSuffix}` : title;
    }, [title, documentTitleSuffix]);

    const clearDocumentTitleSuffix = () => {
        setDocumentTitleSuffix('');
    };

    return (
        <DocumentMetaContext.Provider
            value={{ setDocumentTitle, setDocumentTitleSuffix, clearDocumentTitleSuffix }}>
            {children}
        </DocumentMetaContext.Provider>
    );
};

export default DocumentMetaProvider;
