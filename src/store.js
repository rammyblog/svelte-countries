import { writable } from "svelte/store";
import shuffle from "./utils/shuffle";

const getCountries = () => {
  const { subscribe, update, set } = writable({
    countries: [],
    borders: [],
    country: [],
    loading: false,
    filteredCountries: [],
  });

  return {
    subscribe,
    add: (countries) =>
      update((state) => {
        const tempState = { ...state };
        tempState.countries = [...state.countries, ...countries];
        return tempState;
      }),
    singleCountry: (name) =>
      update((state) => {
        const tempState = { ...state };
        const singleCountry = state.countries.find(
          (country) => country.name.toLowerCase() === name.toLowerCase()
        );
        tempState.borders = [];

        if (singleCountry) {
          singleCountry.borders.forEach((countryCode) => {
            let borderCountry = state.countries.find((item) => {
              return (
                item.alpha3Code.toLowerCase() === countryCode.toLowerCase()
              );
            });

            tempState.borders = [...tempState.borders, borderCountry.name];
          });
        }
        tempState.country = [singleCountry];
        return tempState;
      }),
    filter: (region) =>
      update((state) => {
        const tempState = { ...state };
        state.loading = true;
        if (region === "all") {
          tempState.filteredCountries = shuffle(tempState.countries);
        } else {
          tempState.filteredCountries = tempState.countries.filter(
            (country) => {
              return country.region.toLowerCase() === region.toLowerCase();
            }
          );
        }
        tempState.loading = false;
        return tempState;
      }),
  };
};

export const countries = getCountries();
