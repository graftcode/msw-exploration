import { fireEvent, screen, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";

import Home from "./Home";

import { searchMoviesMock } from "../../mocks/searchMoviesMock";
import { setup } from "../../testUtils/setup";

const handlers = [
  rest.get("https://www.omdbapi.com", (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    const searchTerm = req.url.searchParams.get("s");

    if (page && searchTerm) return res(ctx.json(searchMoviesMock(page)));
  }),

  rest.get("https://m.media-amazon.com/*", async (req, res, ctx) => {
    return res(ctx.set("Content-Type", "image/svg+xml"));
  }),
];

const server = setupServer(...handlers);

beforeEach(() => {
  setup(Home);
});

beforeAll(() => {
  server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => {
  server.close();
});

describe("<Home />", () => {
  test("renders Home component", () => {
    const testComponent = screen.getByTestId("search-movies");
    expect(testComponent).toBeInTheDocument();
  });

  describe("Search movie form", () => {
    test("renders Input component", () => {
      const inputComponent = screen.getByPlaceholderText(
        "Search for a movie..."
      );
      expect(inputComponent).toBeInTheDocument();
    });

    test("renders searchButton component", () => {
      const searchButton = screen.getByText("🔍");
      expect(searchButton).toBeInTheDocument();
    });

    test("renders a list on movies when form is submitted successfully", async () => {
      const inputComponent = screen.getByPlaceholderText(
        "Search for a movie..."
      );
      const searchButton = screen.getByText("🔍");

      fireEvent.change(inputComponent, { target: { value: "abc" } });
      fireEvent.click(searchButton);

      // Wait for the API request to complete
      // then make assertions
      await waitFor(() => {
        const movieItems = screen.getAllByTestId("movie-item");

        expect(movieItems.length).toBe(10);
        expect(screen.getAllByTestId("search-movies-result")).toMatchSnapshot();
      });
    });
  });
});
