import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Lesson from './02_components/Lesson';
//import Lesson from './03_state/Lesson';
//import Lesson from './04_props/Lesson';
//import { Lesson, Counter, Button } from './05_props/Lesson';
//import  Lesson  from './06_event/Lesson';
//import  Lesson  from './07_conditional_rendering/Lesson';
//import  Lesson  from './08_listANDkeys/Lesson';
//import  Lesson  from './09_fragment_&_css/Lesson';
import  Lesson  from './10_forms/Lesson';
import * as serviceWorker from './serviceWorker';

//Создание компонентов реакт без файла с расширением .jsx
React.createElement('div', null, 'Simple div with text');
React.createElement('input', { className: 'just-class'});


//ReactDOM.render(<Lesson child={<Button />}><Counter /></Lesson>, document.getElementById('root'));
ReactDOM.render(<Lesson /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
