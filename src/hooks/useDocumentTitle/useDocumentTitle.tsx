import React from 'react';
import { DocumentMetaContext } from '../../contexts';

interface UseDocumentTitle {
    setSuffix: (text: string) => void;
    clearSuffix: () => void;
}

const useDocumentTitle = (title: string): UseDocumentTitle => {
    const { setDocumentTitle, setDocumentTitleSuffix, clearDocumentTitleSuffix } =
        React.useContext(DocumentMetaContext);

    React.useEffect(() => {
        setDocumentTitle(title);
    }, [title]);

    return { setSuffix: setDocumentTitleSuffix, clearSuffix: clearDocumentTitleSuffix };
};

export default useDocumentTitle;
