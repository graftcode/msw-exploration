import axios from "axios";

export const getMovieInformation = async (movieId) => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=a93ceeb4&i=${movieId}`
    );

    return response;
  } catch (e) {
    console.log(e);

    return {
      error: {
        message: e?.response?.data?.Error,
      },
    };
  }
};
