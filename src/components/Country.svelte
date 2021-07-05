<script>
  export let name;
  console.log(name);
</script>

<div class="card__detail">
  <img src="https://restcountries.eu/data/cri.svg" alt="Costa rica flag" />
  <div class="card__main">
    <h2>Costa Rica</h2>
    <p>Population: <span>Americas</span></p>
    <p>Region: <span>4,890,379</span></p>
    <p>Sub Region: <span>Central America</span></p>
    <p>Capital: <span>San José</span></p>
  </div>
  <div class="card__main">
    <p>Top Level Domain: <span>.cr</span></p>
    <p>Currencies: <span>Costa Rican colón</span></p>
    <p>Languages: <span>Spanish</span></p>
  </div>
</div>

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
