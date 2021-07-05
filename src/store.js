import { writable } from "svelte/store";

const getCountries = () => {
  const { subscribe, update, set } = writable([]);

  return {
    subscribe,
    add: (countries) =>
      update((state) => {
        const updatedCountries = [...state, ...countries];
        return updatedCountries;
      }),
  };
};

export const countries = getCountries();
