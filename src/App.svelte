<script>
  import Main from './pages/Main.svelte'
  // @ts-ignore
  import Login from './pages/Login.svelte'
  // @ts-ignore
  import Signup from './pages/Signup.svelte'
  import Write from './pages/Write.svelte'
  import Router from 'svelte-spa-router'
  import "./css/style.css"
  import NotFound from './pages/NotFound.svelte'
  
  const routes={
    '/':Main,
    '/login':Login,
    '/signup':Signup,
    '/write':Write,
    "*":NotFound
  }
</script>

<main>
  <Router routes={routes}/>
</main>

<style>
  
</style>
