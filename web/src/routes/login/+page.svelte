<script lang="ts">
  import type { PageData } from "./$types.js";
  import SettingsForm from "./login-form.svelte";
  import * as Card from "$lib/components/ui/card";
  export let data: PageData;
</script>

<div class="flex h-[100vh] justify-center pt-12">
  <Card.Root class="h-fit w-3/4 md:w-1/4">
    <Card.Header>
      <Card.Title>Login</Card.Title>
    </Card.Header>
    <Card.Content>
      <SettingsForm data={data.form} />
    </Card.Content>
  </Card.Root>
</div>
