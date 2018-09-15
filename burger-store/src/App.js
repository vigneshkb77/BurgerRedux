import React, { Component } from 'react';
import Layout from './components/Layouts/layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
class App extends Component {
  render() {
    return (
      <div className="App">
        React-
        <h1>September 15</h1>
        <Layout>
          <h1>layout</h1>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
