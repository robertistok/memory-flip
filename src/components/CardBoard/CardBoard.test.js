import React from "react";
import { shallow, mount } from "enzyme";
import { ThemeProvider } from "styled-components";

import { theme } from "../../utils/styles";
import { ROWS_COUNT, COLUMNS_COUNT } from "../../utils/constants";
import CardBoard from "./CardBoard";

describe("<CardBoard />", () => {
  it("renders without crashing", () => {
    shallow(<CardBoard />);
  });

  it("renders the correct number of cards", () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <CardBoard />
      </ThemeProvider>
    );

    const CardComponents = wrapper.find("Card");
    expect(CardComponents.length).toEqual(ROWS_COUNT * COLUMNS_COUNT);
  });
});
