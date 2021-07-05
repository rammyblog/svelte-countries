<script>
  // Import
  import Navbar from "./components/Navbar.svelte";
  import { Router, Route } from "svelte-routing";
  import Home from "./components/Home.svelte";
  import Country from "./components/Country.svelte";
  export let url = ""; //This property is necessary declare to avoid ignore the Router
</script>

<Navbar />
<div class="main">
  <Router {url}>
    <Route path="/" component={Home} />
    <Route path="country/:name" let:params>
      <Country name={params.name} />
    </Route>
  </Router>
</div>

<style>
  .main {
    margin: 50px;
  }
</style>
