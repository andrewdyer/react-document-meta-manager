import React from 'react';
import { DocumentMetaContext } from '../../contexts';

interface UseDocumentTitle {
    setDocumentTitleSuffix: (text: string) => void;
    clearDocumentTitleSuffix: () => void;
}

const useDocumentTitle = (title: string): UseDocumentTitle => {
    const { setDocumentTitle, setDocumentTitleSuffix, clearDocumentTitleSuffix } =
        React.useContext(DocumentMetaContext);

    React.useEffect(() => {
        setDocumentTitle(title);
    }, [title]);

    return { setDocumentTitleSuffix, clearDocumentTitleSuffix };
};

export default useDocumentTitle;
