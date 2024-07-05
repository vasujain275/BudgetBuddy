<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { User, Settings, LifeBuoy, LogOut, Github } from "lucide-svelte";
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild let:builder>
    <Button builders={[builder]} variant="ghost" size="icon">
      <User />
      <span class="sr-only">Toggle theme</span>
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content align="end">
    <DropdownMenu.Item>
      <Settings class="mr-2 h-4 w-4" />
      <span>Settings</span>
    </DropdownMenu.Item>
    <DropdownMenu.Item>
      <LifeBuoy class="mr-2 h-4 w-4" />
      <span>Support</span>
    </DropdownMenu.Item>
    <DropdownMenu.Item>
      <Github class="mr-2 h-4 w-4" />
      <span>GitHub</span>
    </DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Item>
      <LogOut class="mr-2 h-4 w-4" />
      <span>Log out</span>
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
