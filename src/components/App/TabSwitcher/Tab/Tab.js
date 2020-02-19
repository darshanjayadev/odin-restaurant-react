import React from 'react';
import Home from './Home/Home';
import About from './About/About';
import Theme  from './Theme/Theme';

const Tab = ({ tabName }) => {
  switch(tabName) {
    case "about":
      return <About />
    case "theme":
      return <Theme />
    case "home":
    default:
      return <Home />
  }
}

export default Tab;
