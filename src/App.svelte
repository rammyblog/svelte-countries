<script>
  // Import
  import Navbar from "./components/Navbar.svelte";
  import { Router, Route, Link } from "svelte-navigator";
  import Home from "./components/Home.svelte";
</script>

<Navbar />
<div class="main">
  <Router primary={false}>
    <Route path="/" component={Home} />
  </Router>
</div>

<style>
  .main {
    margin: 50px;
  }
</style>
