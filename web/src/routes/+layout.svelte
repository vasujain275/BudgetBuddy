<script lang="ts">
  import "../app.css";
  import { ModeWatcher } from "mode-watcher";
  import NavBar from "$lib/components/custom/NavBar.svelte";
</script>

<ModeWatcher />
<NavBar />
<slot />
