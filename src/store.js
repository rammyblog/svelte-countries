import { writable } from "svelte/store";

const getCountries = () => {
  const { subscribe, update, set } = writable({
    countries: [],
    borders: [],
    country: [],
  });

  return {
    subscribe,
    add: (countries) =>
      update((state) => {
        const updatedCountries = [...state.countries, ...countries];
        return updatedCountries;
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
