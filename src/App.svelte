<script>
  import Main from './pages/Main.svelte'
  // @ts-ignore
  import Login from './pages/Login.svelte'
  import Loading from './pages/Loading.svelte'
  // @ts-ignore
  import Signup from './pages/Signup.svelte'
  import Write from './pages/Write.svelte'
  import Router from 'svelte-spa-router'
  import "./css/style.css"
  import NotFound from './pages/NotFound.svelte'
  import { GoogleAuthProvider, getAuth, signInWithCredential } from "firebase/auth";
  import { user$ } from "./store";
  import { onMount } from 'svelte';
  import MyPage from './pages/MyPage.svelte';

let isLoading = true;

  const auth = getAuth();

  const checkLogin = async () => {
  const token= localStorage.getItem("token")
  if (!token) return isLoading = false;

  const cridential=GoogleAuthProvider.credential(null,token);
 const result=await signInWithCredential(auth, cridential);
 const user=result.user;
 user$.set(user)
  isLoading=false;
}


  const routes={
    '/':Main,
    '/login':Login,
    '/signup':Signup,
    '/write':Write,
    '/my': MyPage,
    "*":NotFound
  }
  onMount(checkLogin);
</script>
{#if isLoading}
<Loading />
{:else if !$user$}
<Login />
{:else}
<Router routes={routes}/>
{/if}

<style>
  
</style>
