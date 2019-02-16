import React, { Fragment } from 'react';
import './styleFragment.css';

//Передача нескольких компонентов с помощью итерируемого объекта Array
//обязательно добавить key каждому элементу
// const Columns = () => ([
//   <td key="1">Hello</td>,
//   <td key="2">world</td>
// ]);

//Передача с помощью Fragment
// const Columns = () => (
//   <Fragment>
//     <td>Hello</td>
//     <td>world</td>
//   </Fragment>
// );

//Добавление CSS, инлайновый стиль и с помощью класса
const styles = {color: 'red', textTransform: 'uppercase'}
const Columns = () => (
  <Fragment>
    <td style={styles}>Inline</td>
    <td className="title">Simple class</td>
  </Fragment>
);
const Table = () => (
  <table>
    <tbody>
      <tr>
        <Columns />
      </tr>
    </tbody>
  </table>
);

export default Table
