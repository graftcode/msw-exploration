import { screen, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";

import MovieInformation from "./MovieInformation";

import { setup } from "../../testUtils/setup";
import { movieInformationMock } from "../../mocks/movieInformationMock";

const mockData = movieInformationMock();

const handlers = [
  rest.get("https://www.omdbapi.com", (req, res, ctx) => {
    const movieId = req.url.searchParams.get("i");

    if (movieId) return res(ctx.json(mockData));
  }),

  rest.get("https://m.media-amazon.com/*", async (_, res, ctx) => {
    return res(ctx.set("Content-Type", "image/svg+xml"));
  }),
];

const server = setupServer(...handlers);

beforeEach(() => {
  setup(MovieInformation);
});

beforeAll(() => {
  server.listen();
});

afterEach(() => server.resetHandlers());

afterAll(() => {
  server.close();
});

describe("<MovieInformation />", () => {
  test("renders Spinner component in initial render", async () => {
    // Loading spinner shows on first render
    const spinnerComponent = screen.getByTestId("spinner");
    expect(spinnerComponent).toBeInTheDocument();

    // useEffect fires api call. There, loading is set to false therefore no loading spinner
    await waitFor(() => {
      const spinnerComponent = screen.queryByTestId("spinner");
      expect(spinnerComponent).toBeNull();
    });
  });

  test("renders MovieInformation component on successfull api call", async () => {
    await waitFor(() => {
      const movieInformationComponent = screen.getByTestId("movie-information");

      expect(movieInformationComponent).toBeInTheDocument();
    });
  });

  test("renders MovieInformation containing image", async () => {
    await waitFor(() => {
      const movieImage = screen.getByAltText(mockData.imdbID);
      expect(movieImage).toBeInTheDocument();
    });
  });

  test("renders MovieInformation containing all data", async () => {
    await waitFor(() => {
      const movieTitle = screen.getByText("The ABC Murders");
      const movieRating = screen.getByText("6.6/10", { exact: false });
      const moviePlot = screen.getByText(
        'In 1933, retired detective Hercule Poirot is targeted by a taunting killer who sends letters signed "ABC", which Poirot must decode in order to discover the identity of the murderer.'
      );
      const movieReleaseDate = screen.getByText("01 Feb 2019");

      [movieTitle, movieRating, moviePlot, movieReleaseDate].forEach(
        (testQuery) => {
          expect(testQuery).toBeInTheDocument();
        }
      );
    });
  });
});
