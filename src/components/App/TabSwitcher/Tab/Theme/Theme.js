import React from 'react';
import './Theme.css';

const Theme = () => {
  const themes = ["theme-1", "theme-2", "theme-3"];
  const selectTheme = (theme) => {
    // Reference: https://medium.com/@harishv6665_49536/theming-with-react-js-or-any-in-minutes-with-css-variables-11d4ebecdb41
    document.documentElement.setAttribute('data-theme', theme);
  }
  return (
    <div className="theme">
      <header className="main">
        <h1>Odin Restaurant</h1>
        <h3>Themes</h3>
      </header>
      <section className="description">
        <div className="placeholder">
          Select a theme
        </div>
        <div className="theme-container">
          {
            themes.map((theme) => (
              <button className={theme} key={theme} onClick={() => {selectTheme(theme)}}>{theme}</button>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Theme;
