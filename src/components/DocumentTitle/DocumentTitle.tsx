import React from 'react';
import { useDocumentTitle } from '../../hooks';

export interface DocumentTitleProps {
    children?: React.ReactNode;
    title: string;
    suffix?: string;
}

const DocumentTitle: React.FC<DocumentTitleProps> = ({ title, suffix, children }) => {
    const { setSuffix, clearSuffix } = useDocumentTitle(title);

    React.useEffect(() => {
        if (suffix) {
            setSuffix(suffix);
        } else {
            clearSuffix();
        }
    }, [suffix, setSuffix, clearSuffix]);

    return <React.Fragment>{children}</React.Fragment>;
};

export default DocumentTitle;
