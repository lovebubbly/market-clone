<!-- FILEPATH: /e:/market-clone/src/pages/loading.svelte -->

<script>
    import { onMount } from 'svelte';

    let dots = '';

    function animateDots() {
        dots = dots.length < 3 ? dots + '.' : '';
    }

    onMount(() => {
        setInterval(animateDots, 500);
    });
</script>

<style>
    .loading {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #000;
        color: #fff;
        font-size: 2rem;
    }

    .loading .dots {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .loading .text {
        font-size: 1.5rem;
    }
</style>

<div class="loading">
    <div class="dots">{dots}</div>
    <div class="text">Loading...</div>
</div>
