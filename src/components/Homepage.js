import React from 'react';
import styled from 'styled-components';

const HomeStyles = styled.h1`
  h1 {
    background-color: red;
  }
`

class Homepage extends React.Component {
  render() {
    return (
      <HomeStyles>
        <h1>THIS THE H1 YALL</h1>
        <p>THIS THE P YALL</p>
      </HomeStyles>
    )
  }
}

export default Homepage;