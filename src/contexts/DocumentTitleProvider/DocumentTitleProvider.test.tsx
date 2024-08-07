import React from 'react';
import { render } from '@testing-library/react';
import DocumentTitleContext from '../DocumentTitleContext';
import DocumentTitleProvider from './DocumentTitleProvider';

interface TestComponentProps {
    title?: string;
    text?: string;
    clear?: boolean;
}

const TestComponent: React.FC<TestComponentProps> = ({ title, text, clear }) => {
    const { setDocumentTitle, setText, clearText } = React.useContext(DocumentTitleContext);

    React.useEffect(() => {
        if (title) setDocumentTitle(title);
        if (text) setText(text);
        if (clear) clearText();
    }, [setDocumentTitle, setText, title, text]);

    return null;
};

describe('DocumentTitleProvider', () => {
    test('should update the document title based on context values', () => {
        render(
            <DocumentTitleProvider>
                <TestComponent title="Base Title" />
            </DocumentTitleProvider>
        );

        expect(document.title).toBe('Base Title');
    });

    test('should add text suffix to the document title', () => {
        render(
            <DocumentTitleProvider>
                <TestComponent title="Base Title" text="Notification" />
            </DocumentTitleProvider>
        );

        expect(document.title).toBe('Base Title - Notification');
    });

    test('should clear the text suffix from the document title', () => {
        render(
            <DocumentTitleProvider>
                <TestComponent title="Base Title" text="Notification" clear />
            </DocumentTitleProvider>
        );

        expect(document.title).toBe('Base Title');
    });
});
