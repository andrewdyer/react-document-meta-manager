import React from 'react';
import DocumentTitleContext from '../DocumentTitleContext';

export interface DocumentTitleProviderProps {
    children: React.ReactNode;
}

const DocumentTitleProvider: React.FC<DocumentTitleProviderProps> = ({ children }) => {
    const [title, setTitle] = React.useState<string>('');

    React.useEffect(() => {
        document.title = title;
    }, [title]);

    return (
        <DocumentTitleContext.Provider value={{ setTitle }}>
            {children}
        </DocumentTitleContext.Provider>
    );
};

export default DocumentTitleProvider;
