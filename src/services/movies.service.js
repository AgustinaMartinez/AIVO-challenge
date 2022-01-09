import axios from "axios";

export const getMovies = async () => {
  try {
    const response = await axios.get('/api/movies');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
