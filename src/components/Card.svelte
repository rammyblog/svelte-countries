<script>
  export let name;
  export let population;
  export let region;
  export let capital;
  export let flag;
  import { Link } from "svelte-routing";
</script>

<div class="card">
  <img class="card__image" src={flag} alt={name} />

  <div class="card__details">
    <p class="card__name"><Link to={`/country/${name}`}>{name}</Link></p>
    <p class="card__info">
      Population: <span>{population.toLocaleString("en-US")}</span>
    </p>
    <p class="card__info">Region: <span>{region}</span></p>
    <p class="card__info">Capital: <span>{capital}</span></p>
  </div>
</div>

<style>
  .card {
    max-width: 350px;
    width: 100%;
    /* min-width: 240px; */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 0.8rem;
  }

  .card__image {
    width: 100%;
    height: 50%;
    object-fit: cover;
  }
  .card__name {
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 1.3rem;
  }
  .card__details {
    padding: 1rem;
  }

  .card__info {
    margin: 0;
    font-weight: bold;
  }
  .card__info span {
    font-weight: normal;
    font-size: 0.9rem;
  }

  @media (max-width: 1218px) {
    .card {
      max-width: 320px;
    }
  }

  @media (max-width: 970px) {
    .card {
      max-width: 250px;
    }
  }

  @media (max-width: 750px) {
    .card {
      max-width: 200px;
    }
  }

  @media (max-width: 600px) {
    .card {
      max-width: 250px;
    }
  }

  @media (max-width: 514px) {
    .card {
      max-width: 400px;
    }
  }
</style>
