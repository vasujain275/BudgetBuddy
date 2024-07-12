<script lang="ts">
  import SettingsForm from "./register-form.svelte";
  import * as Card from "$lib/components/ui/card";
  import type { PageData } from "../$types";
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
