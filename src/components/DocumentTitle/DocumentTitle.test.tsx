import React from 'react';
import { render } from '@testing-library/react';
import { DocumentTitleProvider } from '../../contexts';
import DocumentTitle from './DocumentTitle';

describe('DocumentTitle', () => {
    test('should set the document title', () => {
        render(
            <DocumentTitleProvider>
                <DocumentTitle title="Base Title" />
            </DocumentTitleProvider>
        );

        expect(document.title).toBe('Base Title');
    });

    test('should append text suffix to the document title', () => {
        render(
            <DocumentTitleProvider>
                <DocumentTitle title="Base Title" suffix="Notification" />
            </DocumentTitleProvider>
        );

        expect(document.title).toBe('Base Title - Notification');
    });
});
