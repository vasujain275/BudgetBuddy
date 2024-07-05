<script lang="ts">
  async function getHealth() {
    const response = await fetch("http://0.0.0.0:8069/v1/healthcheck");
    const result = await response.json();
    return result;
  }
</script>

<h1>Here is the Status:</h1>

{#await getHealth()}
  <p>Loading</p>
{:then result}
  <pre>
    {JSON.stringify(result)}
  </pre>
{:catch error}
  <p>{error.message}</p>
{/await}
