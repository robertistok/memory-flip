import React from "react";
import styled, { ThemeProvider } from "styled-components";

import CardBoard from "./CardBoard";
import { theme } from "./utils/styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Root>
        Wlecome!
        <CardBoard />
      </Root>
    </ThemeProvider>
  );
};

const Root = styled.div`
  height: calc(100vh - 40px);
  width: calc(100vw - 40px);
  padding: 20px;
`;
export default App;
