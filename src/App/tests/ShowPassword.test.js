import React from "react";
import { render } from "@testing-library/react";

import ShowPassword from "../ShowPassword";

import { checkBasicRendering, checkRequiredProps } from "../../testingHelpers";

const testProps = { handleToggle: jest.fn() };

const Component = <ShowPassword {...testProps} />;

describe("<ShowPassword />", () => {
  it("Should render and match the snapshot", () => {
    const {
      container: { firstChild },
    } = render(Component);
    expect(firstChild).toMatchSnapshot();
  });

  checkBasicRendering(Component);
  checkRequiredProps(Component);
});
