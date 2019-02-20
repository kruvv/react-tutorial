import React, { Component, Fragment } from 'react';

//Пробрасывание данных в дочернии элементы с помощью контекста
const TitleContext = React.createContext();

  const LevelThree = ({ title }) => (
    <TitleContext.Consumer>
      { ({ title, subTitle, click }) => (
        <Fragment>
          <h1 onClick={click}>{title}</h1>
          <h2>{subTitle}</h2>
        </Fragment>
      ) }
    </TitleContext.Consumer>
  )

  const LevelTwo = ({ title }) => <LevelThree title={title} />

  const LevelOne = ({ title }) => <LevelTwo title={title} />

class Lesson extends Component {
  render() {
    return (
      <TitleContext.Provider value={{ title: "Simple Title", subTitle: "Sub Title", click: () => {console.log("Hello!!!")}}}>
        <LevelOne />
      </TitleContext.Provider>
    );
  }
}
export default Lesson;
