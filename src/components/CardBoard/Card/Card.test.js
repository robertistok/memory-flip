import React from "react";
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "styled-components";

import { theme } from "../../../utils/styles";
import Card from "./Card";

describe("<Card />", () => {
  const props = {
    disabled: false,
    matched: false,
    number: 32,
    id: "1",
    flipped: false,
    flipCard: jest.fn()
  };

  it("renders without crashing", () => {
    shallow(<Card {...props} />);
  });

  it("does not show the number when not flipped", () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Card {...props} />
      </ThemeProvider>
    );

    const BackCard = wrapper.find(`div[data-test="back-card"]`);
    const FrontCard = wrapper.find(`div[data-test="front-card"]`);

    expect(BackCard.props().style.opacity).toEqual(1);
    expect(FrontCard.props().style.opacity).toEqual(0);
  });

  it("shows the number when flipped and not matched", () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Card {...props} flipped={true} />
      </ThemeProvider>
    );

    const BackCard = wrapper.find(`div[data-test="back-card"]`);
    const FrontCard = wrapper.find(`div[data-test="front-card"]`);

    expect(BackCard.props().style.opacity).toEqual(0);
    expect(FrontCard.props().style.opacity).toEqual(1);
    expect(FrontCard.render().html()).toEqual(`${props.number}`);
  });

  it("shows the number when not flipped, but matched", () => {
    const wrapper = mount(
      <ThemeProvider theme={theme}>
        <Card {...props} matched={true} />
      </ThemeProvider>
    );

    const BackCard = wrapper.find(`div[data-test="back-card"]`);
    const FrontCard = wrapper.find(`div[data-test="front-card"]`);

    expect(BackCard.props().style.opacity).toEqual(0);
    expect(FrontCard.props().style.opacity).toEqual(0.3);
    expect(FrontCard.render().html()).toEqual(`${props.number}`);
  });
});
