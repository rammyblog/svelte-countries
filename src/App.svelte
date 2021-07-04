<script>
  import Card from "./components/Card.svelte";
</script>

<main>
  <div class="card-display">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
</main>

<style>
  .card-display {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
</style>
