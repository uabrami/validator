import React from "react";
import Message from "../Message";

import { checkBasicRendering, checkRequiredProps } from "../../testingHelpers";

const testProps = { message: "test" };

const Component = <Message {...testProps} />;

describe("<Message />", () => {
  checkBasicRendering(Component);
  checkRequiredProps(Component);
});
