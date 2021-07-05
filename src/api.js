import axios from "axios";

const getCountries = async () => {
  try {
    const res = await axios.get("https://restcountries.eu/rest/v2/all");
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { getCountries };
