import React from 'react';
import DocumentTitleContext from '../DocumentTitleContext';

export interface DocumentTitleProviderProps {
    children: React.ReactNode;
}

const DocumentTitleProvider: React.FC<DocumentTitleProviderProps> = ({ children }) => {
    const [title, setTitle] = React.useState<string>('');
    const [text, setText] = React.useState<string>('');

    React.useEffect(() => {
        document.title = text ? `${title} - ${text}` : title;
    }, [title, text]);

    return (
        <DocumentTitleContext.Provider value={{ setTitle, setText }}>
            {children}
        </DocumentTitleContext.Provider>
    );
};

export default DocumentTitleProvider;
