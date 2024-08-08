import React from 'react';
import { render } from '@testing-library/react';
import DocumentMetaContext from '../DocumentMetaContext';
import DocumentMetaProvider from './DocumentMetaProvider';

interface TestComponentProps {
    title?: string;
    titleSuffix?: string;
    clear?: boolean;
}

const TestComponent: React.FC<TestComponentProps> = ({ title, titleSuffix, clear }) => {
    const { setDocumentTitle, setDocumentTitleSuffix, clearDocumentTitleSuffix } =
        React.useContext(DocumentMetaContext);

    React.useEffect(() => {
        if (title) setDocumentTitle(title);
        if (titleSuffix) setDocumentTitleSuffix(titleSuffix);
        if (clear) clearDocumentTitleSuffix();
    }, [setDocumentTitle, setDocumentTitleSuffix, title, titleSuffix]);

    return null;
};

describe('DocumentMetaProvider', () => {
    test('should update the document title based on context values', () => {
        render(
            <DocumentMetaProvider>
                <TestComponent title="Base Title" />
            </DocumentMetaProvider>
        );

        expect(document.title).toBe('Base Title');
    });

    test('should add title suffix to the document title', () => {
        render(
            <DocumentMetaProvider>
                <TestComponent title="Base Title" titleSuffix="Notification" />
            </DocumentMetaProvider>
        );

        expect(document.title).toBe('Base Title - Notification');
    });

    test('should clear the title suffix from the document title', () => {
        render(
            <DocumentMetaProvider>
                <TestComponent title="Base Title" titleSuffix="Notification" clear />
            </DocumentMetaProvider>
        );

        expect(document.title).toBe('Base Title');
    });
});
