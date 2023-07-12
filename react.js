import './style.css';
import App from './javascript';
import React from 'react';
import ReactDom from 'react-dom/client';
import data from './data';


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App data={data} />
    </React.StrictMode>
)