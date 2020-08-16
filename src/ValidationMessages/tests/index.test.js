import React from "react";
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
  checkBasicRendering(Component);
  checkRequiredProps(Component);
});
