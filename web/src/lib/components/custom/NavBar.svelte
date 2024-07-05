<script lang="ts">
  import ThemeButton from "$lib/components/custom/ThemeButton.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import ProfileIcon from "$lib/components/custom/ProfileIcon.svelte";
</script>

<nav class="mt-2 grid grid-cols-6 md:grid-cols-12">
  <div class="col-span-1 flex items-center justify-end gap-2 md:col-span-2">
    <img class="h-12 w-12" src="logo.png" alt="logo" />
    <a href="/" class="hidden md:block">BudgetBuddy</a>
  </div>
  <div class="ml-4 hidden items-center justify-center md:col-span-8 md:flex">
    <Button variant="ghost" class="text-lg">Overview</Button>
    <Button variant="ghost" class="text-lg">Transactions</Button>
    <Button variant="ghost" class="text-lg">Budget</Button>
  </div>
  <div class="text-offwhite col-span-6 ml-4 flex items-end md:col-span-2 md:items-center">
    <ThemeButton />
    <div class="ml-4 mr-4">
      <ProfileIcon />
    </div>
  </div>
</nav>
