import React from "react";
import ConfirmationMessage from "../ConfirmationMessage";

import { checkBasicRendering, checkRequiredProps } from "../../testingHelpers";

const testProps = {
  isValid: true,
  message: "test",
};

const Component = <ConfirmationMessage {...testProps} />;

describe("<ConfirmationMessage />", () => {
  checkBasicRendering(Component);
  checkRequiredProps(Component);
});
