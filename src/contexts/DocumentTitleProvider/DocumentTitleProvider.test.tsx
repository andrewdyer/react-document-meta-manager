import React from 'react';
import { render } from '@testing-library/react';
import DocumentTitleContext from '../DocumentTitleContext';
import DocumentTitleProvider from './DocumentTitleProvider';

describe('DocumentTitleProvider', () => {
    test('should update the document title based on context values', () => {
        const TestComponent = () => {
            const { setTitle } = React.useContext(DocumentTitleContext);

            React.useEffect(() => {
                setTitle('Base Title');
            }, [setTitle]);

            return null;
        };

        render(
            <DocumentTitleProvider>
                <TestComponent />
            </DocumentTitleProvider>
        );

        expect(document.title).toBe('Base Title');
    });
});
