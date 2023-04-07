import { render, screen } from "@testing-library/react";

import Spinner from "./Spinner";

test("Spinner", () => {
  render(<Spinner />);

  const testComponent = screen.getByTestId("spinner");
  expect(testComponent).toBeInTheDocument();
});
