<script lang="ts">
    export let data;

</script>
{#each data.posts as i}
    <p>{i.title}</p>
{/each}
