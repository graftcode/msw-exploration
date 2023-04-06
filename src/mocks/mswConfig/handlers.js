import { rest } from "msw";

import { searchMoviesMock } from "../searchMoviesMock";
import { movieInformationMock } from "../movieInformationMock";

export const handlers = [
  rest.get(
    "https://www.omdbapi.com?apikey=:apiKey&s=:searchTerm&page=:page&i=:movieId",
    (req, res, ctx) => {
      const page = req.url.searchParams.get("page");
      const searchTerm = req.url.searchParams.get("s");
      const movieId = req.url.searchParams.get("i");

      if (movieId) return res(ctx.json(movieInformationMock()));
      if (page && searchTerm) return res(ctx.json(searchMoviesMock(page)));
    }
  ),

  rest.get("https://m.media-amazon.com/*", async (req, res, ctx) => {
    const imagePath = `/assets/movieIcon.svg`;

    const imageResponse = await ctx.fetch(imagePath);

    const image = await imageResponse.text();

    return res(
      ctx.body(image),
      ctx.set("Content-Type", "image/svg+xml") // Set the Content-Type header to 'image/svg+xml'
    );
  }),
];
