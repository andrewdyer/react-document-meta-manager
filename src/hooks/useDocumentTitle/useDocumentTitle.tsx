import React from 'react';
import { DocumentTitleContext } from '../../contexts';

interface UseDocumentTitle {
    setText: (text: string) => void;
    clearText: () => void;
}

const useDocumentTitle = (title: string): UseDocumentTitle => {
    const { setDocumentTitle, setText, clearText } = React.useContext(DocumentTitleContext);

    React.useEffect(() => {
        setDocumentTitle(title);
    }, [title]);

    return { setText, clearText };
};

export default useDocumentTitle;
