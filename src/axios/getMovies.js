import axios from "axios";

export const getMovies = async (searchTerm, pageNumber = 1) => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=9937617e&s=${searchTerm}&page=${pageNumber}`
    );

    console.log(response);

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
