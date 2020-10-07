import React from "react";

const WinScreen = () => {
  return (
    <section className="main" id="root">
      <section className="result">
        <div className="result__logo">
          <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
        </div>
        <h2 className="result__title">Вы настоящий меломан!</h2>
        <p className="result__total">Вы&nbsp;ответили правильно на 6 вопросов и совершили 2&nbsp;ошибки</p>
        <button className="replay" type="button">Сыграть ещё раз</button>
      </section>
    </section>
  );
};

export default WinScreen;
