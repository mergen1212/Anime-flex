<script lang="ts">
    import type { PageData } from "./$types";
    //jjkjk
    let { data }: { data: PageData } = $props();
</script>

<pre>{JSON.stringify(data.InfoAnime)}</pre>