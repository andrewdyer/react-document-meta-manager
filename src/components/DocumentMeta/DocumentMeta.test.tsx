import React from 'react';
import { render } from '@testing-library/react';
import { DocumentMetaProvider } from '../../contexts';
import DocumentMeta from './DocumentMeta';

describe('DocumentMeta', () => {
    test('should set the document title', () => {
        render(
            <DocumentMetaProvider>
                <DocumentMeta title="Base Title" />
            </DocumentMetaProvider>
        );

        expect(document.title).toBe('Base Title');
    });

    test('should append text suffix to the document title', () => {
        render(
            <DocumentMetaProvider>
                <DocumentMeta title="Base Title" suffix="Notification" />
            </DocumentMetaProvider>
        );

        expect(document.title).toBe('Base Title - Notification');
    });
});
