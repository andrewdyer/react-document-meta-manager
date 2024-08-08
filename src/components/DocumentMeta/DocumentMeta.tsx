import React from 'react';
import { useDocumentTitle } from '../../hooks';

export interface DocumentMetaProps {
    children?: React.ReactNode;
    title: string;
    titleSuffix?: string;
}

const DocumentMeta: React.FC<DocumentMetaProps> = ({ title, titleSuffix, children }) => {
    const { setDocumentTitleSuffix, clearDocumentTitleSuffix } = useDocumentTitle(title);

    React.useEffect(() => {
        if (titleSuffix) {
            setDocumentTitleSuffix(titleSuffix);
        } else {
            clearDocumentTitleSuffix();
        }
    }, [titleSuffix, setDocumentTitleSuffix, clearDocumentTitleSuffix]);

    return <React.Fragment>{children}</React.Fragment>;
};

export default DocumentMeta;
