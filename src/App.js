import React, { Component } from 'react';
import styled from 'styled-components';
import triangles from './images/triangles.png';
import Header from './components/Header';
import Home from './pages/Home';

const AppContainer = styled.div`
  background-image: url(${triangles});
  background-repeat: repeat;
  background-size: 100%;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <Home />
      </AppContainer>
    );
  }
}

export default App;
