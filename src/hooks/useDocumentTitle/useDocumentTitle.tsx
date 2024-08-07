import React from 'react';
import { DocumentTitleContext } from '../../contexts';

const useDocumentTitle = (title: string): void => {
    const { setTitle } = React.useContext(DocumentTitleContext);

    React.useEffect(() => {
        setTitle(title);
    }, [title]);
};

export default useDocumentTitle;
