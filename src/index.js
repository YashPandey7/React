import React from 'react';
import ReactDOM from 'react-dom';
import App, {name ,nm} from './App';

ReactDOM.render(
    <>
        <App/>
        <ol>
            <li>{name}</li>
            <li>{nm}</li>
        </ol>
    </>
    , document.getElementById('root')
);