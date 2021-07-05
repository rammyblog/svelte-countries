<script>
  let query;
</script>

<div class="input-icons">
  <i class="fas fa-search" />
  <input
    class="input-field"
    type="text"
    bind:value={query}
    placeholder="Search for a country"
  />
</div>

<style>
  .input-icons {
    width: 14rem;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .input-icons i {
    position: absolute;
    padding: 0.8rem;
    color: gray;
  }

  .input-field {
    /* width: 100%; */
    padding: 10px;
    text-align: center;
    border: none
  }
</style>
