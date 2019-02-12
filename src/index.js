import React from 'react';
import ReactDOM from 'react-dom';
//import Lesson from './02_components/Lesson';
//import Lesson from './03_state/Lesson';
import Lesson from './04_props/Lesson';
import * as serviceWorker from './serviceWorker';

//Создание компонентов реакт без файла с расширением .jsx
React.createElement('div', null, 'Simple div with text');
React.createElement('input', { className: 'just-class'});


ReactDOM.render(<Lesson />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
