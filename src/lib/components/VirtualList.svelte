<script lang="ts">
  import { onMount } from 'svelte';
  import { tick } from 'svelte';

  export let items: any[] = [];
  export let rowHeight = 40;
  export let overscan = 5;

  let container: HTMLDivElement;
  let scrollTop = 0;
  let containerHeight = 0;

  $: total = items.length;
  $: startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
  $: visibleCount = Math.ceil(containerHeight / rowHeight) + overscan * 2;
  $: visibleItems = items.slice(startIndex, startIndex + visibleCount);
  $: offsetY = startIndex * rowHeight;

  const state = { get total() { return total; }, get visibleItems() { return visibleItems; }, get offsetY() { return offsetY; } };

  onMount(async () => {
    await tick();
    containerHeight = container.clientHeight;
  });

  function handleScroll() {
    scrollTop = container.scrollTop;
  }
</script>

<div bind:this={container} on:scroll={handleScroll} class="overflow-auto w-full h-full">
  <div style="height: {items.length * rowHeight}px; position: relative;">
    <div
      style="transform: translateY({state.offsetY}px);"
      class="absolute top-0 left-0 w-full"
    >
      {#each state.visibleItems as item (item.key || item.name.join('-'))}
        <slot name="item" {item} />
      {/each}
    </div>
  </div>
</div>
