<script>
  import Card from "./components/Card.svelte";
  import Search from "./components/Search.svelte";
  import Select from "./components/Select.svelte";
</script>

<main>
  <div class="query-box">
    <Search />
    <Select />
  </div>
  <div class="card-display">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</main>

<style>
  main {
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
