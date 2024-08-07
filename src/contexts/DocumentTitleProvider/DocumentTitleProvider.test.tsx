import React from 'react';
import { render } from '@testing-library/react';
import DocumentTitleContext from '../DocumentTitleContext';
import DocumentTitleProvider from './DocumentTitleProvider';

const TestComponent: React.FC<{ title?: string; text?: string }> = ({ title, text }) => {
    const { setTitle, setText } = React.useContext(DocumentTitleContext);

    React.useEffect(() => {
        if (title) setTitle(title);
        if (text) setText(text);
    }, [setTitle, setText, title, text]);

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
});
