<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  let region;
</script>

<div>
  <select
    bind:value={region}
    on:change={() => dispatch("changeRegion", { region })}
  >
    <option value="all">All</option>
    <option value="africa">Africa</option>
    <option value="americas">America</option>
    <option value="asia">Asia</option>
    <option value="europe">Europe</option>
    <option value="oceania">Oceania</option>
  </select>
</div>

<style>
</style>
