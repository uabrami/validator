import React from "react";
import { render } from "@testing-library/react";

import ConfirmationMessage from "../ConfirmationMessage";

import { checkBasicRendering, checkRequiredProps } from "../../testingHelpers";

const testProps = {
  isValid: true,
  message: "test",
};

const Component = <ConfirmationMessage {...testProps} />;

describe("<ConfirmationMessage />", () => {
  it("Should render and match the snapshot", () => {
    const {
      container: { firstChild },
    } = render(Component);
    expect(firstChild).toMatchSnapshot();
  });

  checkBasicRendering(Component);
  checkRequiredProps(Component);
});
