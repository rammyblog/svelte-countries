<script>
  // Import
  import Card from "./components/Card.svelte";
  import Navbar from "./components/Navbar.svelte";
  import Search from "./components/Search.svelte";
  import Select from "./components/Select.svelte";
  import { paginate, LightPaginationNav } from "svelte-paginate";

  import { onMount, onDestroy } from "svelte";
  import { getCountries } from "./api";
  import { countries } from "./store";

  // Pagination
  let items;
  let currentPage = 1;
  let pageSize = 6;
  const unsubscribe = countries.subscribe((value) => {
    items = value;
  });
  $: paginatedItems = paginate({ items, pageSize, currentPage });

  // On mount
  onMount(async () => {
    const data = await getCountries();
    countries.add(data);
  });
  onDestroy(unsubscribe);
</script>

<Navbar />
<div class="main">
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
</div>

<style>
  .main {
    margin: 50px;
  }
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
