<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
</script>

<div class="mx-4 mt-6 min-w-[165px] sm:mx-24 sm:mt-12">
  <h2
    class="min-w-[45px] scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
  >
    Wallet 💰
  </h2>
  <Card.Root class="w-[350px]">
    <Card.Header>
      <Card.Title>Cash 💸</Card.Title>
    </Card.Header>
    <Card.Content></Card.Content>
    <Card.Footer class="flex justify-between">
      <Button variant="outline">Cancel</Button>
      <Button>Deploy</Button>
    </Card.Footer>
  </Card.Root>
</div>
