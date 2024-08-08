import React from 'react';
import { render } from '@testing-library/react';
import DocumentMetaContext from '../DocumentMetaContext';
import DocumentMetaProvider from './DocumentMetaProvider';

interface TestComponentProps {
    title?: string;
    text?: string;
    clear?: boolean;
}

const TestComponent: React.FC<TestComponentProps> = ({ title, text, clear }) => {
    const { setDocumentTitle, setDocumentTitleSuffix, clearDocumentTitleSuffix } =
        React.useContext(DocumentMetaContext);

    React.useEffect(() => {
        if (title) setDocumentTitle(title);
        if (text) setDocumentTitleSuffix(text);
        if (clear) clearDocumentTitleSuffix();
    }, [setDocumentTitle, setDocumentTitleSuffix, title, text]);

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

    test('should add text suffix to the document title', () => {
        render(
            <DocumentMetaProvider>
                <TestComponent title="Base Title" text="Notification" />
            </DocumentMetaProvider>
        );

        expect(document.title).toBe('Base Title - Notification');
    });

    test('should clear the text suffix from the document title', () => {
        render(
            <DocumentMetaProvider>
                <TestComponent title="Base Title" text="Notification" clear />
            </DocumentMetaProvider>
        );

        expect(document.title).toBe('Base Title');
    });
});
