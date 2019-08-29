import React from "react";
import styled, { ThemeProvider } from "styled-components";

import CardBoard from "./components/CardBoard";
import { CardBoardStateProvider } from "./components/CardBoard/CardBoardState";
import { theme } from "./utils/styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Description>
          Welcome to memory-flip. Start by clicking on any of the cards and try
          to find its matching pair.
        </Description>
        <CardBoardStateProvider>
          <CardBoard />
        </CardBoardStateProvider>
      </Root>
    </ThemeProvider>
  );
};

const Root = styled.div`
  height: calc(100vh - 40px);
  width: calc(100vw - 40px);
  padding: 20px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Description = styled.p`
  margin: 40px;
`;
export default App;
