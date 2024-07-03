<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
  import ThemeButton from "$lib/components/custom/ThemeButton.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
</script>

<nav class="mt-2 grid grid-cols-12">
  <div class="col-span-2 flex items-center justify-end">
    <img class="h-12 w-12" src="logo.png" alt="logo" />
  </div>
  <div class="ml-4 flex items-center justify-center sm:col-span-8">
    <Button variant="ghost" class="text-lg">Overview</Button>
    <Button variant="ghost" class="text-lg">Transactions</Button>
    <Button variant="ghost" class="text-lg">Budget</Button>
  </div>
  <div class="text-offwhite ml-4 flex items-center sm:col-span-2">
    <ThemeButton></ThemeButton>
    <div class="ml-4 mr-4">
      <Avatar.Root>
        <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
        <Avatar.Fallback>CN</Avatar.Fallback>
      </Avatar.Root>
    </div>
  </div>
</nav>
