<script lang="ts">
  import ThemeButton from "$lib/components/custom/ThemeButton.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import ProfileIcon from "$lib/components/custom/ProfileIcon.svelte";
  import { goto } from "$app/navigation";

  function route(path: string) {
    goto(path);
  }
</script>

<nav class="grid grid-cols-6 gap-4 p-4 md:grid-cols-12">
  <div class="col-span-1 flex items-center gap-2 md:col-span-2">
    <img class="h-12 w-12" src="logo.png" alt="logo" />
    <a href="/" class="hidden text-lg font-bold md:block">BudgetBuddy</a>
  </div>

  <div class="hidden items-center justify-center gap-4 md:col-span-8 md:flex">
    <Button variant="ghost" class="text-lg" onclick={() => route("/overview")}>Overview</Button>
    <Button variant="ghost" class="text-lg">Transactions</Button>
    <Button variant="ghost" class="text-lg">Budget</Button>
  </div>

  <div class="col-span-5 flex items-center justify-end gap-4 md:col-span-2">
    <ThemeButton />
    <div class="ml-4">
      <ProfileIcon />
    </div>
  </div>
</nav>
