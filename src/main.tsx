// import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
// ~
import { store } from 'store';
import App from './App.tsx';
import './index.css';
import { FormProvider, TableProvider } from 'context';

ReactDOM.createRoot(document.getElementById('root')!).render(
    // <React.StrictMode>
        <Provider store={store}>
            <FormProvider>
                <TableProvider>
                    <App />
                </TableProvider>
            </FormProvider>
        </Provider>
    // </React.StrictMode>
);
