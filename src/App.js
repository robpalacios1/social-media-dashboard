import React, { Fragment } from 'react';
import './Global.css';
import Header from './Header'
import TopCardList from './Top-card-list'
import Overview from './Overview'
import Switch from './Switch'


function App() {
  return (
    <Fragment>
      <Header>
        <Switch />
      </Header>
      <TopCardList />
      <Overview />
    </Fragment>
  );
}

export default App;
