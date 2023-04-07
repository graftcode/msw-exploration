import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("renders App component", () => {
    render(<App />);
    const AppTitle = screen.getByText("Movies Library");
    expect(AppTitle).toBeInTheDocument();
  });
});
