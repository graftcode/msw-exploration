import { rest } from "msw";

import { movieInformationMock, searchMoviesMock } from "../index";

export const handlers = [
  rest.get("https://www.omdbapi.com", (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    const searchTerm = req.url.searchParams.get("s");
    const movieId = req.url.searchParams.get("i");

    if (movieId) return res(ctx.json(movieInformationMock()));
    if (page && searchTerm) return res(ctx.json(searchMoviesMock(page)));
  }),

  rest.get("https://m.media-amazon.com/*", async (req, res, ctx) => {
    const imagePath = `/assets/movieIcon.svg`;

    const imageResponse = await ctx.fetch(imagePath);

    const image = await imageResponse.text();

    return res(ctx.body(image), ctx.set("Content-Type", "image/svg+xml"));
  }),
];
