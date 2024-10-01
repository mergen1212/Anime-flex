
<script>
  import { fade } from 'svelte/transition';
</script>

<svelte:head>
  <title>About | My Svelte App</title>
  <meta name="description" content="Learn more about our Svelte application" />
</svelte:head>

<div in:fade={{ duration: 300 }}>
  <h1>About</h1>
  <p>Welcome to the About page of our Svelte application!</p>
  <p>Svelte is a modern JavaScript framework that compiles your code to tiny, framework-less vanilla JS. It offers great performance and a delightful developer experience.</p>
  <h2>Key Features of Svelte:</h2>
  <ul>
    <li>No Virtual DOM</li>
    <li>True reactivity</li>
    <li>Less boilerplate</li>
    <li>Built-in animations and transitions</li>
    <li>Efficient updates</li>
  </ul>
  <p>This page is a simple example of a Svelte component. It demonstrates basic structure, styling, and the use of transitions.</p>
</div>

<style>
  div {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  h1 {
    color: #ff3e00;
  }
  h2 {
    color: #676778;
  }
  ul {
    list-style-type: disc;
    margin-left: 20px;
  }
</style>
