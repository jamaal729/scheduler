import React from "react";
import { render, cleanup } from "@testing-library/react";

import Application from "components/Application";

afterEach(cleanup);

it("renders without crashing", () => {
  console.log("test 0");
  render(<Application />);
});
