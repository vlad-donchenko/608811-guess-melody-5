import React from "react";

const AuthScreen = () => {
  return (
    <React.Fragment>
      <main className="app">
        <svg xmlns="http://www.w3.org/2000/svg" style={{position: `absolute`, left: `-1200em`}}>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5"/>
            <feOffset dx="0" dy="0"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </svg>
        <section className="main" id="root">
          <section className="login">
            <div className="login__logo">
              <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
            </div>
            <h2 className="login__title">Вы настоящий меломан!</h2>
            <p className="login__text">Хотите узнать свой результат? Представтесь!</p>
            <form className="login__form" action="">
              <p className="login__field">
                <label className="login__label" htmlFor="name">Логин</label>
                <input className="login__input" type="text" name="name" id="name"/>
              </p>
              <p className="login__field">
                <label className="login__label" htmlFor="password">Пароль</label>
                <input className="login__input" type="text" name="password" id="password"/>
                <span className="login__error">Неверный пароль</span>
              </p>
              <button className="login__button button" type="submit">Войти</button>
            </form>
            <button className="replay" type="button">Сыграть ещё раз</button>
          </section>
        </section>
      </main>
    </React.Fragment>
  );
};

export default AuthScreen;
