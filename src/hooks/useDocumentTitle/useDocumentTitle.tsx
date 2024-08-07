import React from 'react';
import { DocumentTitleContext } from '../../contexts';

interface UseDocumentTitle {
    setText: (text: string) => void;
}

const useDocumentTitle = (title: string): UseDocumentTitle => {
    const { setTitle, setText } = React.useContext(DocumentTitleContext);

    React.useEffect(() => {
        setTitle(title);
    }, [title]);

    return { setText };
};

export default useDocumentTitle;
