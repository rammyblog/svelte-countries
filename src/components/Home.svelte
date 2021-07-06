<script>
  import Search from "./Search.svelte";
  import Select from "./Select.svelte";
  import Card from "./Card.svelte";
  import Loading from "./Loading.svelte";

  import { paginate, LightPaginationNav } from "svelte-paginate";
  import { onMount, onDestroy } from "svelte";
  import { getCountries } from "../api";
  import { countries } from "../store";

  // Pagination
  let items;
  let currentPage = 1;
  let pageSize = 6;

  // Loading state
  let loading = false;

  const unsubscribe = countries.subscribe((value) => {
    items = value.filteredCountries;
  });
  $: paginatedItems = paginate({ items, pageSize, currentPage });

  const changeRegion = ({ detail }) => {
    countries.filter(detail.region, null);
    items = $countries.filteredCountries;
  };

  const search = ({ detail }) => {
    countries.filter(null, detail.query);
    items = $countries.filteredCountries;
  };

  // On mount
  onMount(async () => {
    loading = true;
    const data = await getCountries();
    countries.add(data);
    countries.filter("all");
    loading = false;
  });
  onDestroy(unsubscribe);
</script>

<div class="query-box">
  <Search on:search={search} />
  <Select on:changeRegion={changeRegion} />
</div>
{#if loading}
  <div class="center">
    <Loading />
  </div>
{:else}
  <div class="card-display">
    {#each paginatedItems as country (country.numericCode)}
      <Card {...country} />
    {:else}
      <p>No country found! Maybe you need to create your Kingdom</p>
    {/each}
  </div>
  <LightPaginationNav
    totalItems={items.length}
    {pageSize}
    {currentPage}
    limit={1}
    showStepOptions={true}
    on:setPage={(e) => (currentPage = e.detail.page)}
  />
{/if}

<style>
  .card-display {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    min-height: 100vh;
  }

  .query-box {
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
  }

  @media (max-width: 900px) {
    .query-box {
      padding: 0;
    }
  }

  @media (max-width: 450px) {
    .query-box {
      display: block;
    }
  }
</style>
