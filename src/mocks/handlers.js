import { rest } from "msw";

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
      ctx.json({
        Search: [
          {
            Title: "The ABC Murders",
            Year: "2018",
            imdbID: page + "tt8463714",
            Type: "series",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BYmJmNzU0NTgtOGM5Ni00MWJiLTgwZmMtNDIyNjYzZDAzNzI5XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg",
          },
          {
            Title: "ABC Afterschool Specials",
            Year: "1972–1997",
            imdbID: page + "tt0202179",
            Type: "series",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BOTY2MmRiZjQtM2MyMC00MDViLThhMjUtYzZiN2JkYzA4NDE5XkEyXkFqcGdeQXVyMTY2MzYyNzA@._V1_SX300.jpg",
          },
          {
            Title: "ABC Africa",
            Year: "2001",
            imdbID: page + "tt0281534",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMTU5ODc1ODc2Ml5BMl5BanBnXkFtZTcwMzEyOTgyMQ@@._V1_SX300.jpg",
          },
          {
            Title: "ABC TGIF",
            Year: "1989–2018",
            imdbID: page + "tt0312324",
            Type: "series",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BMDY2M2MyZTEtYmZlZi00NTUyLWE4MWItNDg3YmIzY2VjZWYyXkEyXkFqcGdeQXVyMTEwODg2MDY@._V1_SX300.jpg",
          },
          {
            Title: "ABC World News Tonight with David Muir",
            Year: "1953–",
            imdbID: page + "tt0184090",
            Type: "series",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BYWZjYWYyMjctMjIyMS00YzM5LWExYzctZmI4OWFmZDQyNGQ1XkEyXkFqcGdeQXVyNzU5OTQ1MDM@._V1_SX300.jpg",
          },
          {
            Title: "ABC News Nightline",
            Year: "1980–",
            imdbID: page + "tt0154053",
            Type: "series",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BYTNiODgzYWItYmYyNi00NDk1LWEzOGUtNjUyZjg3NmU5YTJhXkEyXkFqcGdeQXVyODg3NDc1OTE@._V1_SX300.jpg",
          },
          {
            Title: "ABC Weekend Specials",
            Year: "1977–1995",
            imdbID: page + "tt0075471",
            Type: "series",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BNjllM2ViM2MtNTJkYi00YjZhLTkyMjEtMzBkZWU1OGQzYTA0XkEyXkFqcGdeQXVyMTg2NjYzOA@@._V1_SX300.jpg",
          },
          {
            Title: "Garotas do ABC",
            Year: "2003",
            imdbID: page + "tt0327451",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BZjdkMTkyMTMtMmU1MC00MDYyLWEwMWUtMDdiYzYwNmI0ZjZiXkEyXkFqcGdeQXVyMTU2ODc4ODQ@._V1_SX300.jpg",
          },
          {
            Title: "ABC da Greve",
            Year: "1990",
            imdbID: page + "tt0317051",
            Type: "movie",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BNDMxN2FjMjAtNTQ4YS00MWE0LWIzMjktZjc0YTUxOTc5YWFkXkEyXkFqcGdeQXVyOTU3ODk4MQ@@._V1_SX300.jpg",
          },
          {
            Title: "ABC Late Night",
            Year: "1973–1976",
            imdbID: page + "tt0176356",
            Type: "series",
            Poster:
              "https://m.media-amazon.com/images/M/MV5BNzQxOTAyYTMtODczNy00MWUxLTlkY2YtY2VkOGVmNmM3YmIxXkEyXkFqcGdeQXVyMjcyMDU4NA@@._V1_SX300.jpg",
          },
        ],
        totalResults: "30",
        Response: "True",
      })
    );
  }),
  rest.get("https://m.media-amazon.com/", (req, res, ctx) => {
    // Persist user's authentication in the session
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),
];
