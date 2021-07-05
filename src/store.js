import { writable } from "svelte/store";

const getCountries = () => {
  const { subscribe, update, set } = writable({
    countries: [],
    borders: [],
    country: [],
    loading: false,
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
  };
};

const singleCountry = () => {
  const { subscribe, update, set } = writable([]);

  return {
    subscribe,
    get: (name, countrie) =>
      update((state) => {
        const updatedCountries = [...state, ...countries];
        return updatedCountries;
      }),
  };
};

export const countries = getCountries();
