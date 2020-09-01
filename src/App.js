import React, { useState, useEffect } from 'react';
import './Global.css';
import Header from './Header'
import TopCardList from './Top-card-list'
import Overview from './Overview'
import Switch from './Switch'


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false)
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq){
    setDarkMode(mq.matches)
    setChecked(mq.matches)
}

useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme:dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.matches)
    setChecked(mq.matches)
}, [])


  return (
    <main className={mainClass}>
      <Header>
        <Switch
          setDarkMode={setDarkMode}
          checked={checked}
          setChecked={setChecked}
        />
      </Header>
      <TopCardList />
      <Overview />
    </main>
  );
}

export default App;
