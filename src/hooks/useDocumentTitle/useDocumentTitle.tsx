import React from 'react';
import { DocumentTitleContext } from '../../contexts';

interface UseDocumentTitle {
    setSuffix: (text: string) => void;
    clearSuffix: () => void;
}

const useDocumentTitle = (title: string): UseDocumentTitle => {
    const { setDocumentTitle, setDocumentTitleSuffix, clearDocumentTitleSuffix } =
        React.useContext(DocumentTitleContext);

    React.useEffect(() => {
        setDocumentTitle(title);
    }, [title]);

    return { setSuffix: setDocumentTitleSuffix, clearSuffix: clearDocumentTitleSuffix };
};

export default useDocumentTitle;
