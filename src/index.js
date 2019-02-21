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
//import  Lesson  from './10_forms/Lesson';
//import  Lesson  from './12_refs/Lesson';
//import  Lesson  from './13_high_order_components/Lesson';
//import  Lesson  from './14_portals/Lesson';
//import  Lesson  from './15_context/Lesson';
//import  Lesson  from './16_api/containers/news/news';
import App from './18_router/Lesson'
import * as serviceWorker from './serviceWorker';

import Home from './18_router/components/home/home';
import Contacts from './18_router/components/contacts/contacts';
import Posts from './18_router/components/posts/posts';

//Подключить к 18 лекции
import { BrowserRouter,Switch, Route } from 'react-router-dom';

//Создание компонентов реакт без файла с расширением .jsx
React.createElement('div', null, 'Simple div with text');
React.createElement('input', { className: 'just-class'});

//Это подключить к лекции 05
//ReactDOM.render(<Lesson child={<Button />}><Counter /></Lesson>, document.getElementById('root'));

//Подключить к лекции 18
ReactDOM.render((
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/posts' component={Posts} />
      </Switch>
    </App>
  </BrowserRouter>
) , document.getElementById('root'));


//ReactDOM.render(<Lesson /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
