import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "styled-components";

import { theme } from "../../utils/styles";
import CardBoard from "./CardBoard";

describe("<CardBoard />", () => {
  it("renders without crashing", () => {
    shallow(<CardBoard />);
  });
});
