import { rest } from "msw";

import { searchMoviesMock } from "./searchMoviesMocks";

export const handlers = [
  // Handles a POST /login request
  rest.get("https://www.omdbapi.com/", (req, res, ctx) => {
    const page = req.url.searchParams.get("page");
    const searchTerm = req.url.searchParams.get("s");

    console.log({
      page,
      searchTerm,
    });

    // Persist user's authentication in the session
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(searchMoviesMock(page))
    );
  }),
  rest.get("https://m.media-amazon.com/", (req, res, ctx) => {
    // Persist user's authentication in the session
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  // rest.get("https://www.omdbapi.com/:movieId", (req, res, ctx) => {
  //   // Persist user's authentication in the session
  //   return res(
  //     // Respond with a 200 status code
  //     ctx.status(200),
  //     ctx.delay(5000),
  //     ctx.json({
  //       Title: "The ABC Murders",
  //       Year: "2018",
  //       Rated: "TV-14",
  //       Released: "01 Feb 2019",
  //       Runtime: "2 min",
  //       Genre: "Crime, Drama, Mystery",
  //       Director: "N/A",
  //       Writer: "N/A",
  //       Actors: "John Malkovich, Eamon Farren, Michael Shaeffer",
  //       Plot: 'In 1933, retired detective Hercule Poirot is targeted by a taunting killer who sends letters signed "ABC", which Poirot must decode in order to discover the identity of the murderer.',
  //       Language: "English",
  //       Country: "United Kingdom",
  //       Awards: "3 nominations",
  //       Poster:
  //         "https://m.media-amazon.com/images/M/MV5BYmJmNzU0NTgtOGM5Ni00MWJiLTgwZmMtNDIyNjYzZDAzNzI5XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg",
  //       Ratings: [
  //         {
  //           Source: "Internet Movie Database",
  //           Value: "6.6/10",
  //         },
  //       ],
  //       Metascore: "N/A",
  //       imdbRating: "6.6",
  //       imdbVotes: "10,579",
  //       imdbID: "tt8463714",
  //       Type: "series",
  //       totalSeasons: "1",
  //       Response: "True",
  //     })
  //   );
  // }),
];

const obj = "";
