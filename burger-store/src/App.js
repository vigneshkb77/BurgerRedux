import React, { Component } from 'react';
import Layout from './hoc/Layouts/layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
class App extends Component {
  render() {
    return (
      <div className="App">
        Burger Stop
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
