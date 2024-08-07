import React from 'react';
import { renderHook } from '@testing-library/react';
import { DocumentTitleProvider } from '../../contexts';
import useDocumentTitle from './useDocumentTitle';

const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <DocumentTitleProvider>{children}</DocumentTitleProvider>
);

describe('useDocumentTitle', () => {
    test('should set the document title', () => {
        renderHook((title: string) => useDocumentTitle('Base Title'), { wrapper });

        expect(document.title).toBe('Base Title');
    });
});
