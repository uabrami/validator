import React from "react";
import App from "../index";
import { render } from "@testing-library/react";

import { checkBasicRendering } from "../../testingHelpers";

const Component = <App />;

describe("<App />", () => {
  it("renders expected content", () => {
    const { container } = render(Component);
    expect(container.querySelectorAll("main").length).toEqual(1);
    expect(container.querySelectorAll("form").length).toEqual(1);
    expect(container.querySelectorAll("p").length).toEqual(2);
    expect(container.querySelectorAll("input").length).toEqual(3);
  });
  it("Should render and match the snapshot", () => {
    const {
      container: { firstChild },
    } = render(Component);
    expect(firstChild).toMatchSnapshot();
  });
  checkBasicRendering(Component);
});
