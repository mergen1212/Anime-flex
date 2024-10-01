<script lang="ts">
    export let data;

</script>
<svelte:head>
  <title>Home</title>
  <meta name="description" content="Learn more about our Svelte application" />
</svelte:head>
{#each data.posts as i}
    <p>{i.title}</p>
{/each}
