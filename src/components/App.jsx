import React from 'react';
import styled from 'styled-components';

// components
import Header from './Header';
import GameDisplay from './GameDisplay';

const App = () => {
  return (
    <SCAppWrapper>
      <Header />
      <GameDisplay />
    </SCAppWrapper>
  );
};

const SCAppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
