import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Nav from './components/nav';
import Blog from './pages/blog';
import AddPost from './pages/add-post';
import ManagePosts from './pages/manage-posts';
import { Provider } from 'react-redux';

import store from './store'

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Router>
          <Nav/>
          <Switch>
            <Route path="/add-post"><AddPost /></Route>
            <Route path="/manage-posts"><ManagePosts /></Route>
            <Route path="/"><Blog /></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
