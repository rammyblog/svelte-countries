<script>
  export let name;
  let country;
  import { countries } from "../store";
  import { onMount, onDestroy } from "svelte";
  import { getCountries } from "../api";

  onMount(async () => {
    if ($countries.length <= 0) {
      const data = await getCountries();
      countries.add(data);
    }
    country = $countries.find(
      (country) => country.name.toLowerCase() === name.toLowerCase()
    );
    console.log(country);
  });
</script>

{#if country}
  <!-- content here -->
  <div class="card__detail">
    <img src={country.flag} alt={country.name} />
    <div class="card__main">
      <h2>{country.name}</h2>
      <p>
        Population: <span>{country.population.toLocaleString("en-US")}</span>
      </p>
      <p>Region: <span>{country.region}</span></p>
      <p>Sub Region: <span>{country.subregion}</span></p>
      <p>Capital: <span>{country.capital}</span></p>
      <p>Border Countries: <span>{country.capital}</span></p>
    </div>
    <div class="card__main">
      <p>
        Top Level Domain: {#each country.topLevelDomain as domain (domain)}
          <span>{domain}</span>
        {/each}
      </p>
      <p>
        Currencies: {#each country.currencies as currency (currency.name)}
          <span>{currency.name}</span>
        {/each}
      </p>
      <p>
        Languages: {#each country.languages as language (language.name)}
          <span>{language.name}</span>
        {/each}
      </p>
    </div>
  </div>
{/if}

<style>
  .card__detail {
    display: grid;
    grid-template-columns: 1.5fr 2fr 1fr !important;
    grid-gap: 0 30px;
    gap: 0 30px;
  }
  img {
    width: 100%;
  }
</style>
