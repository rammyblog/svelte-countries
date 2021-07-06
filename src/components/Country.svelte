<script>
  export let name;
  // let country;
  import { countries } from "../store";
  import { onMount } from "svelte";
  import { getCountries } from "../api";
  import Border from "./Border.svelte";
  import Loading from "./Loading.svelte";
  import { Link } from "svelte-routing";

  onMount(async () => {
    if ($countries.countries.length <= 0) {
      const data = await getCountries();
      countries.add(data);
    }
    countries.singleCountry(name);
  });
</script>

{#each $countries.country as country}
  <button class="btn no-color">
    <i class="fas fa-arrow-left" />
    <Link to="/">Back</Link></button
  >
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
      <p>
        Border Countries: {#each $countries.borders as border (border)}
          <span><Border name={border} /></span>
        {/each}
      </p>
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
          <span>{language.name}, </span>
        {/each}
      </p>
    </div>
  </div>
{:else}
  <div class="center">
    <Loading />
  </div>
{/each}

<!-- content here -->
<style>
  .card__detail {
    display: grid;
    grid-template-columns: 1.5fr 2fr 1fr !important;
    grid-gap: 0 30px;
    gap: 0 30px;
    margin-top: 1rem;
  }
  img {
    width: 100%;
  }

  @media (max-width: 600px) {
    .card__detail {
      display: block;
    }
  }
</style>
