# React Document Metadata

A flexible and dynamic package designed to help you manage document metadata, such as the title and other meta tags, in your React application.

> This package currently focuses on managing the document title, with plans to expand its functionality to other meta tags in the future.

## License

Licensed under MIT. Totally free for private or commercial projects.

## Getting Started

To install this package use npm:

```bash
npm install react-document-metadata
```

## Usage

### Wrap Your React App

To get started, wrap your React app in the `DocumentMetaProvider`. This ensures that the meta tags are managed properly across your entire application:

```tsx
// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { DocumentMetaProvider } from 'react-document-metadata';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <DocumentMetaProvider>
        <App />
    </DocumentMetaProvider>,
    document.getElementById('root')
);
```

### Using the useDocumentTitle Hook

To set the document title dynamically, use the `useDocumentTitle` hook:

```tsx
// App.tsx
import React from 'react';
import { useDocumentTitle } from 'react-document-metadata';

export interface AppProps {}

function App() {
    useDocumentTitle('Home');

    return <div>Hello, world!</div>;
}

export default App;
```

### Using the DocumentMeta Component

Alternatively, you can use the `DocumentMeta` component to manage the document title:

```tsx
// App.tsx
import React from 'react';
import { DocumentMeta } from 'react-document-metadata';

export interface AppProps {}

function App() {
    return <DocumentMeta title="Home">Hello, world!</DocumentMeta>;
}

export default App;
```

## Advanced Examples

### Dynamic Document Titles

This example demonstrates how to update the document title based on the loading state and fetched data. This approach is ideal when your page content depends on asynchronous data fetching:

```tsx
// App.tsx
import React, { useEffect, useState } from 'react';
import { useDocumentTitle } from 'react-document-metadata';

function App() {
    const [user, setUser] = useState<{ name: string } | null>(null);
    const [loading, setLoading] = useState(true);

    useDocumentTitle(loading ? 'Loading...' : user ? user.name : 'User');

    useEffect(() => {
        // Simulate a data fetch
        setTimeout(() => {
            setUser({ name: 'John Doe' });
            setLoading(false);
        }, 2000);
    }, []);

    return <div>{loading ? 'Loading...' : user ? `Hello, ${user.name}` : 'User not found'}</div>;
}

export default App;
```

### Managing Document Title Suffixes

You can easily manage dynamic suffixes in your document titles, such as notification counts, using the `setDocumentTitleSuffix` and `clearDocumentTitleSuffix` methods:

```tsx
// App.tsx
import React, { useEffect, useState } from 'react';
import { useDocumentTitle } from 'react-document-metadata';

function App() {
    const { setDocumentTitleSuffix, clearDocumentTitleSuffix } = useDocumentTitle('Messenger');
    const [newMessages, setNewMessages] = useState(0);

    useEffect(() => {
        // Simulate receiving new messages
        const timer = setInterval(() => {
            setNewMessages(prev => prev + 1);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (newMessages > 0) {
            setDocumentTitleSuffix(`${newMessages} new message${newMessages > 1 ? 's' : ''}`);
        } else {
            clearNotificationText();
        }
    }, [newMessages, setDocumentTitleSuffix, clearNotificationText]);

    return (
        <div>
            {newMessages > 0
                ? `You have ${newMessages} new message${newMessages > 1 ? 's' : ''}`
                : 'No new messages'}
        </div>
    );
}

export default App;
```

## Local Development

For local development, use Yalc to install this package in your project.

Yalc is a tool for managing local development of npm packages. It allows you to work on this package locally and test it in other projects without publishing to the npm registry.

To use yalc, you need to install it globally on your machine. You can do this using npm:

```bash
npm install yalc -g
```

### Installing the Package with Yalc

First, navigate to the project directory where you want to use this package and run:

```bash
yalc add react-document-metadata
```

This will install the package from the local Yalc store. You can now use it in the project as you would with any other npm package.

### Updating the Package with Yalc

After publishing changes to this package to the local Yalc store, navigate to the project directory and run:

```bash
yalc update react-document-metadata
```

This will update the installed version of this package in the project.

## Available Scripts

In the project directory, you can run:

### `npm run build`

Builds production files in your `dist/` folder. It generates CommonJS, ES Modules, as well as TypeScript declaration files.

### `npm run build:cjs`

Builds CommonJS (CJS) modules for the project.

### `npm run build:esm`

Builds ES Modules (ESM) for the project.

### `npm run build:types`

Generates TypeScript declaration files.

### `npm run clean`

Removes the `dist/` folder to ensure a clean build.

### `npm run format`

Formats the code using Prettier according to the rules defined in package.json.

### `npm run test`

Runs the test suite for the project using Jest.

### `npm run test:watch`

Runs the test suite in watch mode, re-running tests when files change.

### `npm run test:coverage`

Runs the test suite and generates a coverage report.

### `npm run yalc:publish`

Publishes the package to the local Yalc store for local development.

### `npm run yalc:push`

Publishes updates to the package in the local Yalc store and pushes the changes to linked projects.

## Publishing

This repository is configured to publish the package to npm, every time you publish a new release, using GitHub Actions.

### Enabling Publishing

Publishing is controlled by the `PUBLISH_ENABLED` environment variable. To enable publishing, you need to set this variable to true. You can set environment variables in your repository settings:

1. Go to your repository on GitHub.
2. Click on Settings.
3. Navigate to Secrets and variables > Actions.
4. Add a new repository variable named `PUBLISH_ENABLED` and set its value to true.

### Creating and Using an npm Token

To publish the package, you need an npm token:

1. Log in to your npm account.
2. Navigate to Access Tokens in your npm account settings.
3. Generate a new token with the Automation option, especially if you have 2FA enabled.
4. Add the token to your GitHub repository secrets:
    - Go to Settings > Secrets and variables > Actions.
    - Add a new secret named `NPM_TOKEN` and paste your npm token.

By configuring these settings, the GitHub Actions workflow will publish your package to npm when you create a new release.
