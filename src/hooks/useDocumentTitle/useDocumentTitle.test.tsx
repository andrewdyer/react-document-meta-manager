import React from 'react';
import { act, renderHook } from '@testing-library/react';
import { DocumentTitleProvider } from '../../contexts';
import useDocumentTitle from './useDocumentTitle';

const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <DocumentTitleProvider>{children}</DocumentTitleProvider>
);

describe('useDocumentTitle', () => {
    test('should set the document title', () => {
        renderHook(() => useDocumentTitle('Base Title'), { wrapper });

        expect(document.title).toBe('Base Title');
    });

    test('should append text suffix to the document title', () => {
        const { result } = renderHook(() => useDocumentTitle('Base Title'), { wrapper });

        act(() => {
            result.current.setText('Notification');
        });

        expect(document.title).toBe('Base Title - Notification');
    });
});
