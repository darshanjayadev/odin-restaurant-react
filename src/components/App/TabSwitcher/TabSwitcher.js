import React from 'react';
import './TabSwitcher.css';
import Tab from './Tab/Tab';

const TabSwitcher = () => {
  const tabs = ["home", "about", "theme"]

  const [tabName, setTabName] = React.useState("home");
  const switchTab = (tabName) => {
    setTabName(tabName);
  }

  return (
    <div className="TabSwitcher">
      <nav className="nav-list">
        {tabs.map((name) => (
          <button className={`tab-btn ${tabName === name ? 'active' : ''}`} key={name} onClick={() => {switchTab(name)}}>{name}</button>
        ))}
      </nav>
      <Tab tabName={tabName}/>
    </div>
  )
}

export default TabSwitcher;
