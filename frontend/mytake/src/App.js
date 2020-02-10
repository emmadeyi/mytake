import React, { Fragment } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './Store';

import './App.css';

import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
import Cards from './components/common/Cards';
import About from './components/common/About';
import SideNav from './components/layouts/Sidenav';
import Take from './components/take/Take';
import AddTake from './components/take/AddTake';
import EditTake from './components/take/EditTake';
import Login from './components/account/Login';
import Register from './components/account/Register';

function App() {
  return (
    <Provider store={store}>

      <Router>
        <Fragment>
          <div className="App">
            <NavBar />
            <div className="main-container">
              <div className="row">
                <div className="col m9 s12 ">
                  <Switch>
                    <Route exact path="/" component={Cards} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Register" component={Register} />
                    <Route exact path="/takes" component={Cards} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/takes/add" component={AddTake} />
                    <Route exact path="/takes/:id" component={Take} />
                    <Route exact path="/takes/edit/:id" component={EditTake} />
                  </Switch>
                </div>
                <div className="col m3 hide-on-small-only">
                  <SideNav />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
