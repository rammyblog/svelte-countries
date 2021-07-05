<script>
  import Search from "./Search.svelte";
  import Select from "./Select.svelte";
  import Card from "./Card.svelte";

  import { paginate, LightPaginationNav } from "svelte-paginate";
  import { onMount, onDestroy } from "svelte";
  import { getCountries } from "../api";
  import { countries } from "../store";
  import shuffle from "../utils/shuffle";

  // Pagination
  let items;
  let currentPage = 1;
  let pageSize = 6;
  const unsubscribe = countries.subscribe((value) => {
    items = value.countries;
  });
  $: paginatedItems = paginate({ items, pageSize, currentPage });

  // On mount
  onMount(async () => {
    const data = await getCountries();
    countries.add(shuffle(data));
  });
  onDestroy(unsubscribe);
</script>

<div class="query-box">
  <Search />
  <Select />
</div>
<div class="card-display">
  {#each paginatedItems as country (country.numericCode)}
    <Card {...country} />
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

<style>
  .card-display {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
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
