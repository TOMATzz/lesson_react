import React from 'react';
import ReactDOM from 'react-dom/client';
//import CounetrButton from './02_components/Lesson.jsx';
//import CounetrButton from './04_Props&Props Types/Lesson.jsx';
//import { Lesson, Counter, Button } from './02_components/Lesson.jsx'
//import App from './06_events/Lesson.jsx'
//import { App } from './08_lists&keys/Lesson.jsx'
//import Table from './09_fragments&&css/Lesson.jsx'
//import Form from './10_forms/Lesson.jsx'
//import Ref from './12_refs/Lesson.jsx'
//import Lesson from './13_hoc/Lesson.jsx';
//import Lesson from './14_react_portal/Lesson.jsx';
//import Lesson from './15_context/Lesson.jsx';
import News from './16_work_with_API/Lesson.jsx';
//import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


   //<Lesson child={<Button />}><Counter /></Lesson>    //урок 02
   //<CounetrButton />
   // <App />                                           // урок 06  07 08
   //<Table />                                            //Урок 09
   //<Form />                                                 // Урок 10
   //<Ref />                                                       //урок 12
   //<Lesson />                                              //урок 13 14 15
   <News />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
