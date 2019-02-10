import React from "react";
import "jest-dom/extend-expect";
import jwt from "jsonwebtoken";

import { act, render } from "react-testing-library";
import { cleanup } from "./utils";

import Component from "../using-refreshFn";

afterEach(cleanup);

jest.useFakeTimers();

test("using-refreshFn", () => {
  const { getByText } = render(<Component />);
  expect(getByText(/^My Name Is:/)).toHaveTextContent("My Name Is: John Smith");

  act(() => jest.runOnlyPendingTimers());

  expect(getByText(/^My Name Is:/)).toHaveTextContent("My Name Is: Jane Smith");

  act(() => jest.runOnlyPendingTimers());

  expect(getByText(/^My Name Is:/)).toHaveTextContent("My Name Is: John Smith");
});
