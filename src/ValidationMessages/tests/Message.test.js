import React from "react";
import { render } from "@testing-library/react";

import Message from "../Message";

import { checkBasicRendering, checkRequiredProps } from "../../testingHelpers";

const testProps = { message: "test" };

const Component = <Message {...testProps} />;

describe("<Message />", () => {
  it("Should render and match the snapshot", () => {
    const {
      container: { firstChild },
    } = render(Component);
    expect(firstChild).toMatchSnapshot();
  });

  checkBasicRendering(Component);
  checkRequiredProps(Component);
});
