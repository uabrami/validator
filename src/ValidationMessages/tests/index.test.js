import React from "react";
import { render } from "@testing-library/react";

import ValidationMessages from "../index";

import { checkBasicRendering, checkRequiredProps } from "../../testingHelpers";

const testProps = {
  messages: [
    {
      text: "8-72 Characters",
      isCompleted: false,
    },
  ],
};

const Component = <ValidationMessages {...testProps} />;

describe("<ValidationMessages />", () => {
  it("Should render and match the snapshot", () => {
    const {
      container: { firstChild },
    } = render(Component);
    expect(firstChild).toMatchSnapshot();
  });

  checkBasicRendering(Component);
  checkRequiredProps(Component);
});
