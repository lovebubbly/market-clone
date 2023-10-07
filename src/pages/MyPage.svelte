<script>
  import Footer from "../components/Footer.svelte";
  import { user$ } from "../store";

const logout = () => {
  user$.set(null);
  localStorage.removeItem("token");
};  
</script>

<div>나의 당근</div>
<button on:click={logout}>로그아웃</button>
<Footer location="my"/>
<!-- 로그아웃 button 꾸미기 -->
<style>
button {
    width: 100%;
    height: 50px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
  }
  </style>