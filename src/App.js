import React, { Fragment } from 'react';
import Header from './Header'
import TopCardList from './Top-card-list'
import Overview from './Overview'
import './Global.css';

function App() {
  return (
    <Fragment>
      <Header />
      <TopCardList />
      <Overview />
    </Fragment>
  );
}

export default App;
