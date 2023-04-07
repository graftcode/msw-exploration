import { render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";

export const setup = (Component) => {
  return render(
    <MemoryRouter>
      <Component />
    </MemoryRouter>
  );
};
