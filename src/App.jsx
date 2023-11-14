import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/header/header';
import HomePage from './components/home-page';
import PopularPage from './components/popular-page';
import Footer from './components/footer/footer';

import './App.scss';

const Spinner = () => <span>Loading...</span>;

function App() {
  return (
    <div className="App">
      <Header />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/new" component={HomePage} />
          <Route exact path="/hot" component={PopularPage} />
        </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
