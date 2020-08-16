import React from "react";
import App from "../index";

import { checkBasicRendering } from "../../testingHelpers";

const Component = <App />;

describe("<App />", () => {
  checkBasicRendering(Component);
});
