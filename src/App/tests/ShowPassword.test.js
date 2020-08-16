import React from "react";
import ShowPassword from "../ShowPassword";

import { checkBasicRendering, checkRequiredProps } from "../../testingHelpers";

const testProps = { handleToggle: jest.fn() };

const Component = <ShowPassword {...testProps} />;

describe("<ShowPassword />", () => {
  checkBasicRendering(Component);
  checkRequiredProps(Component);
});
