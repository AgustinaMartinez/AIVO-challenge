import axios from "axios";
import { URLs } from '../config';

export const getMovies = async () => {
  try {
    const res = await axios.get(URLs.movies);
    return res?.data?.entries;
  } catch (error) {
    console.log('Cannot get the data: ', error);
  }
};
